const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.APP_PORT)

//process.env：进程下的配置文件-环境属性
module.exports = process.env;
