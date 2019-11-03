#! usr/bin/node

const fs = require('fs'),
      http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      { chapterList, userList} = require('./chapterList'),
      path = require('path');
      log = console.log;

var items = [];//用于存储表单从获取的值
var Id=0;
var nowChapter = {};

Router = () => {
    http.createServer((req,res) => {//创建各个页面的路由
        res.setHeader("Content-Type","text/html;charset='utf-8'");
        lj = url.parse(req.url);
        log(req.url);
        switch(lj.pathname){
            case '/login':
                fs.readFile('../login.html',"utf-8",function(err,data){
                    if(err) {
                        log("login.html loading is failed :"+err);
                    }
                    else{
                        //返回login.html页面
                        res.end(data);
                    }
                });
                break;
            case '/list':
                fs.readFile("../chapterList.html","utf-8",function(err,data){
                    if(err) {
                        log("chapterList.html loading is failed :"+err);
                    }
                    else{
                        //返回chapterList.html页面
                        res.end(data);
                    }9
                });
                break;
            case '/a':
                res.write(JSON.stringify(chapterList));
                res.end();
                break;
            case '/detail':
                Id = JSON.stringify(lj.query).replace(/chapterId=/,"")-1;

                fs.readFile('../chapter.html','utf-8',(err,data)=>{
                    if(err){
                        log("chapter.html loading is failed :"+err);
                    }else{
                        //返回chapter.html页面
                        res.end(data);
                    }
                });
                break;
            case '/listmanager':
                console.log(req.url);
                // log(url.parse(req.url, true).query.username);
                if(url.parse(req.url, true).query.username == userList[0].username && url.parse(req.url, true).query.pwd ==userList[0].pwd ){
                    console.log("成功")
                    fs.readFile('../list.html','utf-8',(err,data)=>{
                        if(err){
                            log("list.html loading is failed :"+err);
                            process.exit(1);
                            res.end("失败");
                        }else{
                            res.end(data);
                        }
                    })
                }else{
                    res.end('404');
                }
                break;
            case '/addChapter':
                fs.readFile("../addChapter.html","utf-8",function(err,data){
                    if(err) {
                        log("addChapter.html loading is failed :"+err);
                    }
                    else{
                        //返回addChapter.html页面
                        res.end(data);
                    }
                });
                break;
            case '/art':
                res.write(JSON.stringify(chapterList));
                res.end();
                break;
            case '/nowChapter':
                res.writeHead(200,{'Content-Type':'text/json'});
                nowChapter=chapterList[Id];  
                res.end(JSON.stringify(nowChapter));
                break;
            case '/add':
                console.log("收到");
                var newChapter = {};
                    
                var postData = ""; 
                // 数据块接收中
                req.addListener("data", function (postDataChunk) {
                    postData += postDataChunk;
              
                    var title=postData.split("&")[0].replace(/title=/,'');
                    var content=postData.split("&")[1].replace(/content=/,'');
                    newChapter.chapterId=chapterList.length+1;
                    newChapter.chapterName=title;
                    newChapter.chapterDes=content;
                    newChapter.chapterContent=content;
                    newChapter.publishTimer= "2019-08-19";
                    newChapter.author="admin";
                    newChapter.views=1022;
                    newChapter.imgPath='';
                    chapterList.push(newChapter);            
                });
                break;
        }
    }).listen(8083);
}
Router();