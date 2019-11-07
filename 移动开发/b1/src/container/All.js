import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import { Item } from 'rc-menu';

var items = [];
let style1 = {width:'30px',height:'30px'};
let style2 = {width:'auto',height:'55px',paddingLeft:'0px',backgroundColor:'white',borderBottom:'solid 1px #ddd'};
let style3 = {width:'60px',fontSize:'12px',textAlign:'center',display:'inline',marginLeft:'15px',color:'#c78dc0',float:'left',marginTop:'20px'};

for(var i = 1; i <= 40;i++){
    items[i] = i;
    // console.log(item[i]);
}

    // console.log(1);

export default class All extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then(res=>{
            this.setState({data:res.data});
            // console.log(this.state.data);
            // console.log(this.props)
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then(res=>{
                        this.setState({data:res.data});
                        // console.log(this.state);
                    })
        }
    }
    render() {

        console.log(this.state.data);
        

        return (
            <div>
                {
                    this.state.data.map((item,index)=>(
                        <div key={item} style={style2}>
                            <img src={item.author.avatar_url} alt={index} style={{float:'left',width:'50px'}}></img>
                            <div style={style3}>{item.reply_count}/{item.visit_count}</div>
                            <button style={{float:"left",marginLeft:'10px',marginTop:'15px',width:'40px'}}>{item.tab}</button>
                            <a href={'https://cnodejs.org/topic/'+item.id}  style={{marginLeft:'80px',fontSize:'15px', float:'left',marginTop:'15px'}}>{item.title}</a>
                            <div style={{display:'inline',float:"right"}}>2019/11/06</div>
                        </div>
                    ))
                }
                <div style={{marginLeft:'10px'}}>
                    <button style={style1}>{'<<'}</button>
                    <button style={style1}>{'1'}</button>
                    <button style={style1}>{'2'}</button>
                    <button style={style1}>{'3'}</button>
                    <button style={style1}>{'4'}</button>
                    <button style={style1}>{'5'}</button>
                    <button style={style1}>{'...'}</button>
                    <button style={style1}>{'>>'}</button>
                </div>
            </div>
        )
    }
}
