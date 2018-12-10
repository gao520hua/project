import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Ad from '../components/ad/index.js'
import Video from '../components/video/index.js'
import Daren from '../components/daren/index.js'

class Routes extends Component {
    render() {
        return (
            // 以下其实就是路由规则
            <Router>
                <div className="main">
                    <Route exact path="/" component={Ad} />
                    <Route exact path="/video" component={Video} />
                    <Route exact path="/daren" component={Daren} />
                </div>
            </Router>
        )
    }
}
export default Routes