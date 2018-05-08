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
    thumbnailImageUrl: 'http://chennie1982.pixnet.net/blog/post/133478680-3-1-%E5%A4%A7%E6%A9%8B%E5%9C%8B%E5%B0%8F%E6%84%9B%E5%BF%83%E5%A0%B4',
    title: '老婆福利',
    text: '請選擇',
    actions: [{
      type: 'message',
      label: '老婆稱讚你',
      text: '噁心!死肥宅!誰是你老婆! '
    }, {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123'
    }, {
      type: 'uri',
      label: '老婆性感照',
      uri: 'https://tw.appledaily.com/new/realtime/20150707/642761/'
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