const brr = (arr)=>{
    switch(arr){
        case 0 : {
            return "未处理"
        }
        case 1 : {
            return "补全中"
        }
        case 2 : {
            return "已处理"
        }
        case 3 : {
            return "返佣中"
        }
        case 4 : {
            return "无状态"
        }
    }
}

const getstate =(data)=>{
    let newdata = [...data];
    console.log(newdata,"newdata")
    return data && data.filter(item=>{
        return item.handleState = brr(item.handleState)
    })
}

export default getstate