const { UserModel } = require("../models/User.model")
const ApiError = require("../utils/ApiError")
bcryptjs = require("bcryptjs")
JWTService = require("../utils/JWTService")


class AuthService {
    static async loginUser(body){
        
        const {email,password} = body
        const check_exist = await UserModel.findOne({email})
        if(!check_exist){
            throw new ApiError(400,"No Account Found")
        }
        const isMatch = await bcryptjs.compare(password,check_exist.password)
        if(!isMatch){
            throw new ApiError(400,"Invalid Credentials")
        }

        const token = JWTService.generateToken(check_exist._id)

        return {
            msg:"Login Success",
            "token":token
        }



    }

    
    static async registerUser(body){

        const {name,email,password,ac_type} = body

        const check_exist = await UserModel.findOne({email:email.toLowerCase()})
        if(check_exist){
            throw new ApiError(400,"Email Already Exist")
        }

            const user =    await UserModel.create({
                name,email,password,ac_type
               })

               return {
                msg:"User Created",
                user
               
        }
    
    
}}

module.exports = AuthService