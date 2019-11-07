import React from 'react';
import {Link} from 'react-router-dom';

export default function Heaher(){

    return <div className='headerwrap'>
        {/* return后面不能直接换行或者空格，可以加一个小括号把返回内容括起来 */}
        <header>
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
            <div style={{float:'right',lineHeight:'50px'}}>
                <Link to='/home'>首页</Link>
                <Link to='/start'>新手入门</Link>
                <Link to='/api'>API</Link>
                <Link to='/about'>关于</Link>
                <Link to='/logup'>注册</Link>
                <Link to='/login'>登录</Link>
            </div>
        </header>
    </div>
}