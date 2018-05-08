const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
    console.log(event)
    event.reply({
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://pic.pimg.tw/chennie1982/1362145465-2851540602.jpg?v=1362145470',
    title: '老婆福利社',
    text: '不讓你睡',
    actions: [{
      type: 'postback',
      label: '老婆愛的鼓勵',
      data: 'cheer'
    }, {
      type: 'postback',
      label: '老婆愛的抱抱',
      data: 'hug'
    }, {
      type: 'uri',
      label: '老婆性感照',
      uri: 'https://www.mirrormedia.com.tw/assets/images/20170918171353-db8007d7f0d8209f11dc25010dbb14fd-tablet.jpg'
    }]
  }
});   
//	event.reply(event.message.text).then(function (data) {
//		console.log('Success', data);
//	}).catch(function (error) {
//		console.log('Error', error);
//	});   
});

bot.on('postback', function (event) {
    console.log(event.postback.data)
});



app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});