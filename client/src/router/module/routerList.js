import React, { Component } from 'react'
import Loadable from "react-loadable";
import Islogin from "../../component/islogin"
// import Home from "../../views/home"
// import Login from "../../views/login"
// import Menu from "../../views/menu"

function Loading (){
    return <>loading...</>
}
const Home = Loadable({
    loader:()=>import("../../views/home"),
    loading:Loading
})
const Homeindex = Loadable({
    loader:()=>import("../../views/home/index"),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import("../../views/login"),
    loading:Loading
})
const Menu = Loadable({
    loader:()=>import("../../views/menu"),
    loading:Loading
})
const Quit = Loadable({
    loader:()=>import("../../views/quit"),
    loading:Loading
})
const list = [
    {
        path:"/",
        redirect: "/home/index",
    },
    // {
    //     path:"/home",
    //     redirect: "/home/index",
    // },
    {
        path:"/home",
        component: Islogin(Home),
        chlidren:[
            {
                path:"/home/menu",
                component: Menu,
                chlidren:[
                    {
                        path:"/home/menu/quit/:type",
                        component: Quit,
                    },
                ]
            },
            {
                path:"/home/index",
                component: Homeindex,
            },
            // {
            //     path:"/home/menu",
            //     component: Menu,
            // },
        ]
    },
    {
        path:"/login",
        component: Login
    },
   
]


export default list