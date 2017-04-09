var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    console.log("initial")
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("running on port: " + process.env.PORT || "8080")
})