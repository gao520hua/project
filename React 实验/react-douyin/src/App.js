// 该 app.js 就是主要文件（如同vue 中的app.js）。
import React, { Component } from 'react';

// 引入公共的样式
import './App.css';
import './styles/bass.css'

// 引入组件
import Navigator from './components/nav/index.js'
import RouterView from './router/index.js'
import Foot from './components/footer/index.js'
// 定义本组件
class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <Navigator></Navigator>
                <RouterView />
                <Foot />
            </div>
        );
    }
}
// 导出组件
export default App;
