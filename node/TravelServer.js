const express = require('express')
const app =  express()
const db = require('./db')
const cors = require('cors')



app.use(cors())
app.get('/api/index.json',(req,res) => {


    db.query('select * from goto',(err,result) => {
        res.send(result[0])
    })
    console.log('请求index成功');
})
app.listen(8888,() => {
    console.log('TravelServer is runing');
   
})