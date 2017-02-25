// Web Scraping with Node che3rio


var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

var url = "https://news.google.com/"
request(url, function(err, resp, body){ 
    var $ = cheerio.load(body);
    var topStory = $('.titletext');
    var topStoryText = topStory.text();
console.log(topStoryText);
})

 
app.listen(port) 
console.log('server running on' + port);




// var url = "https://news.google.com/"
// request(url, function(err, resp, body){ 
//     var pin = {};   
//     var $ = cheerio.load(body);


//     var text = $(".basic-title");
//     var text = []
//     text.each(function (i, text){
//         text.push($(img).attr('href'))
//     })
//     console.log(text)

    // var image = $(".basic-title");
    // var imageSrc = []
    // image.each(function (i, img){
    //     imageSrc.push($(img).attr('href'))
    // })
 //   console.log(imageSrc)

    // var $img = image[].attr('content');
    // var $desc = $("meta[itemprop ='text']").attr('content');

    // var pin = {
    //     img: $img,
    //     desc: $desc,
    //     url: url
    // }
    // console.log("scraped:",pin);
    //  can't get scraped results img: undefined
    // desc: undefined
    // url works 2 undefined
