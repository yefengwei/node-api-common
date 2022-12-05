const Router = require("koa-router");
//中间件用以校验数据
const {userValidator,verifyUser,crpytPassword} = require('../middleware/user.middleware')
const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/users" });

// 注册接口
router.post("/register",userValidator,verifyUser,crpytPassword, register);

// 登录接口
router.post("/login", login);

module.exports = router;
