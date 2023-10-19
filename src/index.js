const http=require('http');
const express=require('express');
// const path=require(path)
const app=express();
const fs=require('fs');
const path = require('path'); 
const view=path.join(__dirname,'../public')
// app.use(express.static(view))
let requests=require('requests')
const homefile=fs.readFileSync('E:/WEB DEVELOPMENT/node js -pract/weatherapp/public/index.html','utf-8');
const replaceVal=(tempVal,orgVal)=>{
  let tempr=tempVal.replace('{%tempval%}',orgVal.data.values.temperature);
     tempr=tempr.replace('{%rainIntensity%}',orgVal.data.values.rainIntensity);
     tempr=tempr.replace('{%Location%}',orgVal.location.name);
     return tempr;
    
}
app.get('/',(req,res)=>{
    requests(
        'https://api.tomorrow.io/v4/weather/realtime?location=Sahiwal&apikey=4XXgOggw0aLAG3ZKin0Ibc13cncA07cq'
     )
.on('data',(chunk)=>{
  const obj=JSON.parse(chunk)
  const obarray=[obj]
  const new1=obarray.map((val)=>replaceVal(homefile,val)).join("")
      res.write(new1)
      res.end()
  })

.on('end',(err)=>{
  if(err)return console.log('connection closed due to error',err)
  console.log('end')
  res.end();
})
})
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
    //        requests(
    //             'https://api.tomorrow.io/v4/weather/realtime?location=Sahiwal&apikey=4XXgOggw0aLAG3ZKin0Ibc13cncA07cq'
    //     )
    //     .on('data',(chunk)=>{
    //       const obj=JSON.parse(chunk)
    //       const obarray=[obj]
    //       const new1=obarray.map((val)=>replaceVal(homefile,val)).join("")
    //           res.write(new1)
    //           res.end()
    //       })
      
    //   .on('end',(err)=>{
    //       if(err)return console.log('connection closed due to error',err)
    //       console.log('end')
    //       res.end();
    //   })
    // }
// res.end('ali')}

// })
// // const fpath=path.join(__dirname,"../pub")
// app.use(express.static(fpath));
// app.get('/',(req,res)=>{
//     res.send()

// })
const port=8000;
const host='127.0.0.1';
app.listen(8000,'127.0.0.1',()=>{
    console.log('Go to the');
})