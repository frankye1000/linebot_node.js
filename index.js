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
    thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
    title: 'Menu',
    text: 'Please select',
    actions: [{
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123'
    }, {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123'
    }, {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123'
    }]
  }
});
//	event.reply(event.message.text).then(function (data) {
//		console.log('Success', data);
//	}).catch(function (error) {
//		console.log('Error', error);
//	});   
});



app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});