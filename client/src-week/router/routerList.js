
import Charge from "../views/charge"
import Yes from "../views/yes"


const list =[
    {
        path:"/charge",
        component :Charge
    },
    {
        path:"/",
        redirect: "/charge"
    },
    {
        path:"/yes",
        component :Yes
    }

]


export default list