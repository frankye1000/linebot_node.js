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
    bot.push(event.source.userId, ["歡迎使用外籍配偶機器人","您的幸福我來幫你掌握"])
    event.reply({
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://cdn2.ettoday.net/images/1914/1914546.jpg',
    title: '各國佳麗任居挑選',
    text: '跨國境全包辦費用 保證全程無自費',
    actions: [{
      type: 'postback',
      label: '越南',
      data: 'Vietnam'
    }, {
      type: 'postback',
      label: '印尼',
      data: 'Indonesia'
    }, {
      type: 'postback',
      label: '大陸',
      data: 'china'
    }{
      type: 'postback',
      label: '大陸東北',
      data: 'chinanorth'
    }]
  }
});   
});

bot.on('postback', function (event) {
    if (event.postback.data=='Vietnam'){
        event.reply(['死肥宅!', '鼓你媽!']);
        bot.push(event.source.userId,{type: 'sticker',
                                      packageId: '1',
                                      stickerId: '7'}  )
    }
    else if(event.postback.data=='hug'){
        event.reply(['不要!', '你又油又臭!'])
    }
});



app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});