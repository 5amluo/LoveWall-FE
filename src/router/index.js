import {createRouter , createWebHistory } from "vue-router";
import { h } from 'vue';
import Login from "../page/Login.vue";
import Register from "../page/Register.vue";
import Home from "../page/Home.vue";
import Easteregg from "../page/Easteregg.vue";
import Express from "../page/Express.vue";
import {ElNotification} from "element-plus";
import Change from "../page/Change.vue";
import Talking from "../page/Talking.vue";
import Information from "../page/Information.vue";



const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path: "/Login" ,
        name: "Login" ,
        component: Login,
        beforeEnter(to,from,next){
            if(localStorage.isLogin){
                ElNotification({
                    title: "请先退出登录哦~",
                    message: h("i", { style: "color: teal" }, "还是想想怎么表白吧！"),
                });
                next({name:"Express"})
            }else{
                next()
            }
        }
    },
    {
        path:"/Register",
        name:"Register",
        component: Register,
        beforeEnter(to,from,next){
            if(localStorage.isLogin){
                ElNotification({
                    title: "请先退出登录哦~",
                    message: h("i", { style: "color: teal" }, "急着开小号？？"),
                });
                next({name:"Express"})
            }else{
                next()
            }
        }
    },
    {
        path:"/Easteregg",
        name:"Easteregg",
        component:Easteregg
    },
    {
        path:"/Express",
        name:"Express",
        component: Express
    },
    {
        path:"/Change",
        name:"Change",
        component: Change
    },
    {
        path:"/Talking",
        name:"Talking",
        component: Talking
    },
    {
        path:"/Information",
        name:"Information",
        component:Information
    }

];


const router = createRouter (
    {
        history: createWebHistory() ,
        routes: routes
    }
);

router.beforeEach((to, from, next) => {


    if (localStorage.isLogin || to.name === "Login" || to.name === "Home" || to.name === "Register") {
        next();
    } else {
        ElNotification({
            title: "别急，后面有的你急",
            message: h("i", { style: "color: teal" }, "先登录吧~"),
        });
        next({ name: "Login" });
    }
})


export default router;