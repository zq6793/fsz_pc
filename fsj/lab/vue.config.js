// import URL from './src/components/login/api.js'
module.exports = {
    // runtimeCompiler: true,
    publicPath: './', // 设置打包文件相对路径
    devServer: {
        host: 'localhost',
        port: 80, //设置服务端口号
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://192.168.1.121:7002/youzhitu/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
}