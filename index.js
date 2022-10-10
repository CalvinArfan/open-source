import  Vue from "vue"
//通过export default 导出的内容在导入时时可以任意标识符
import App from "./components/cpn";

 let vm =new Vue({
     el:"#app",
     data:{},
     methods:{},
     components:{
         App,
     },
    templates:`
    <App></App>
    `




 })