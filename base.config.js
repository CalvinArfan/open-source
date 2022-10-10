const  path= require("path")
const baseConfig = require("base.config")
const  webpackMerge   =require("webpack-merge")
const  UglifijsWebpackPlugin =require("uglify-webpack")
module.exports = webpackMerge(
    baseConfig,
    {
        plugins:[

        ]
    }
)