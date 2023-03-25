const { Cheerio } = require('cheerio');
const request= require('request');
request.get("https://github.com/trending",function(err,data){
    
var $ = Cheerio.load(data.body)
var title = $('.repo');
console.log(title);
});

