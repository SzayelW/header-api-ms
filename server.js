var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    var ipadd = req.headers['x-forwarded-for']
    var lang = getLang(req.headers['accept-language'])
    var soft = getUserAgent(req.headers['user-agent'])
    var response = { ipaddress: ipadd, language : lang, software: soft}
    res.setHeader('Content-Type', 'application/json')
    res.send(response)
});

function getLang(language){
    var re = /([a-zA-Z_-]+),/gi
    var array = re.exec(language)
    return array[1]
}

function getUserAgent(userAgent){
    var reg = /\(([^)]+)\)/gi
    var array = reg.exec(userAgent)
    return array[1]
}

app.listen(process.env.PORT || 8080, ()=>{
    console.log("running on port: " + process.env.PORT || "8080")
})