var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
     console.log('进来register路由的/里面了')
  
      res.render("register", {
        index: 2,
        
      });
    });


    router.post("/in", function (req, res, next) {
        console.log('进来login 路由了 /in了 ')
        let obj = req.body;
         console.log(req.body)

         user.findOne({username:obj.username},(err,data)=>{
           console.log('开始写了');

              if(err){
                  //发送错误日志 可以写进数据库
                  console.log(err)
              }
              if(data) {
                  res.redirect('/register')
              }else {
                user.insertMany(req.body,(err,data)=>{
                  if(err){
                      console.log(err)
                  }
                  console.log('数据库成功了')
                  console.log(data)
                    res.redirect('/login')
                   
              })
              }
          })
  
      });




module.exports = router;