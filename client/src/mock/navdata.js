const nav = [
    {
        title:"首页",
        link:"/home/index",
        font:"&#xe613;"
    },
    {
        title:"订单管理",
        link:"/home/menu",
        font:"&#xe60c;",

        children:[
            {
                title:"贷款订单",
                type:1,
                link:'/home/menu/quit/1'
            },
            {
                title:"转单订单",
                type:2,
                link:'/home/menu/quit/2'
            },
            {
                title:"保险订单",
                type:3,
                link:'/home/menu/quit/3'
            }
        ]
    },
    {
        title:"财务管理",
        link:"/home/finance",
        font:"&#xe60d;"

    }
]

export default nav