import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './Home'
import { blockParams } from 'handlebars';
// import { generateKeyPair } from 'crypto';
export default class Signin extends Component {

    render() {
        return (
            <div className='sign' style={{backgroundColor:'white',width:'880px',height:'450px'}}>
              <div style={{width:'100%',height:'35px',backgroundColor:' #444',color:'green'}}>
                <p style={{float:'left',marginLeft:'20px',marginTop:'10px',fontSize:'15px'}}>主页/登录</p>
              </div>
              <p style={{display:'inline',float:'left',marginLeft:'320px',marginTop:'50px'}}>用户名</p>
              <input type='text' style={{float:'left',marginTop:'50px'}} / ><br/>
              <p style={{display:'inline',float:'left',marginLeft:'-220px',marginTop:'100px'}}>密码</p>
              <input  type='text' style={{float:'left',marginLeft:'-170px',marginTop:'100px'}} / ><br/>
              <div style={{float:'left',marginTop:'130px',marginLeft:'-120px'}}>
                 <Link  to={'/home'}   style={{color:'green'}}>登录</Link>
                 <Router>
                 <Route path={'/home'} component={Home} />
                 </Router>
              </div>  
            </div>
        )
    }
}
