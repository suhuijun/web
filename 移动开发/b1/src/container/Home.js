import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';

export default class Home extends Component {
    render() {
        let url = this.props.match.url;

        // console.log(url)

        let style1 = {color:'green',margin:'20px'};
        let style2 = {width:'auto',backgroundColor:'white'};
        let style3 = {backgroundColor:'#f6f6f6',padding:'15px'};

        return(
            <div>
                <div style={style3}>
                    <Link to={url+'/all/'} style={style1}>全部</Link>
                    <Link to={url+'/good'} style={style1}>精华</Link>
                    <Link to={url+'/share'} style={style1}>分享</Link>
                    <Link to={url+'/ask'} style={style1}>问答</Link>
                    <Link to={url+'/job'} style={style1}>招聘</Link>
                </div>
                <div>
                    
                    <div style={style2}>
                        <Route exact path={url+'/all/'}  component={All} />
                        <Route exact path={url+'/good'} component={Good} />
                        <Route exact path={url+'/share'} component={Share} />
                        <Route exact path={url+'/ask'} component={Ask} />
                        <Route exact path={url+'/job'} component={Job} />
                    </div>
                   
                </div>
            </div>
        )
    }
}
