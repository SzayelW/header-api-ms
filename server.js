var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    var ipadd = req.headers['x-forwarded-for']
    var lang = req.headers['accept-language']
    var soft = req.headers['user-agent']
    var response = { ipaddress: ipadd, language : lang, software: soft}
    res.setHeader('Content-Type', 'application/json')
    res.send(response)
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("running on port: " + process.env.PORT || "8080")
})