import React, {Component} from 'react';
import {HashRouter as Router, NavLink} from 'react-router-dom';
import './index.less'

class Navigator extends Component {
    constructor(props) {
        super(props)
        // 定义自己的数据
        this.state = {
            list: [
                {name: "广告行情", path: "/"},
                {name: "视频排行", path: "/video"},
                {name: "达人排行", path: "/daren"}
            ]
        }
    }
    render(){
        // 列表渲染
        let items = this.state.list.map((item, index) =>{
             return <li className="item" key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </li>
        })
        return(
            <div className="header">
                <Router>
                    <div className="cont banxin">
                        <div className="logo"></div>
                        <ul className="nav">
                            {items} 
                        </ul>
                        <div className="rt">
                            <input type="text" />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Navigator