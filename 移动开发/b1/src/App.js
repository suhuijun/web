  
import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Logup from './container/Logup';
import Login from './container/Login';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/logup' component={Logup} />
                            <Route path='/login' component={Login} />
                        </div>
                        <div className="sider">

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
