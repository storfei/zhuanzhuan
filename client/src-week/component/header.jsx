import React, { Component } from 'react'

 class Header extends Component {
     constructor(props){
         super(props)

     }
    render() {
        let {title} = this.props
        return (
            <header>
                <span>返回</span>
                <p>{title}</p>
                <span></span>
            </header>
        )
    }
}
export default Header