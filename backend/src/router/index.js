const express = require("express")
const router = express.Router()
const authRouter = require("./auth")

const routes = [{
    path: '/auth',
    route: authRouter
}]

routes.forEach((cur) => {
    router.use(cur.path, cur.route)
})

module.exports = router