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
    bot.push(event.source.userId, ["歡迎使用外籍配偶機器人","您的幸福 我來掌握"])
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
    }]
  }
});   
});

bot.on('postback', function (event) {
    if (event.postback.data=='Vietnam'){
        event.reply({
                  type: 'template',
                  altText: 'this is a carousel template',
                  template: {
                    type: 'carousel',
                    columns: [{
                      thumbnailImageUrl: 'https://cw1.tw/CW/images/blog/C1436151497588.jpg',
                      title: '越南姑娘-阮月嬌',
                      text: '你好 帥哥 我是來自胡志明市的阮月嬌',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32F 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '24'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '採茶、洗米、燒水、煮飯'
                      }]
                    }, {
                      thumbnailImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Jwa9aJjNjm28Rnq9z-1BvdTsM8xMI3_p9hKz5ggJZgIvAe8',
                      title: '越南昆凌-鄧阿金',
                      text: 'description',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32E 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '秘密'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '參加貴婦活動、喝酒、唱情歌'
                      }]
                    }]
                  }
                });
    }
    else if(event.postback.data=='Indonesia'){
        event.reply(['不要!', '你又油又臭!'])
    }
});



app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});