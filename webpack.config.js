const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"dist/"
    },
    resolve:{
        extensions:[".js",".vue"],
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    },
    model:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎学习 node 开发",
            template:"index.html",
            filename:"index.html",
        })
    ],
    devServer:{
     contentBase:path.resolve(__dirname,"dist"),
        port:6060,
        open:true,
        inline:true,
    }


}