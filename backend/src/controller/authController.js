const AuthService = require("../services/authService")
const ApiErrors = require("../utils/ApiErrors")



class AuthController {

     static async  loginUser(req, res){
        const res_obj = await AuthService.loginUser(req.body)
        res.status(200).send(res_obj)
    }
}




module.exports = AuthController
