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
      data: 'China'
    }]
  }
});   
});

bot.on('postback', function (event) {
    console.log(event)
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
                        data: '採茶 洗米 燒水 煮飯'
                      }]
                    }, {
                      thumbnailImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Jwa9aJjNjm28Rnq9z-1BvdTsM8xMI3_p9hKz5ggJZgIvAe8',
                      title: '越南昆凌-鄧阿金',
                      text: '不要猶豫 你就是我的周杰倫',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32E 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '不能說的秘密'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '唱周杰倫的歌'
                      }]
                    }]
                  }
                });
    }
    if(event.postback.data=='Indonesia'){
        event.reply({
                  type: 'template',
                  altText: 'this is a carousel template',
                  template: {
                    type: 'carousel',
                    columns: [{
                      thumbnailImageUrl: 'https://buzzorange.com/wp-content/uploads/2018/03/10730479896_c228c2871d_z.jpg',
                      title: '印尼林志玲-帕昵尼',
                      text: '台灣的帥哥 我都愛 快來娶我',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32A 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '32'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '把全身包起來 剩眼睛'
                      }]
                    }, {
                      thumbnailImageUrl: 'https://i.ytimg.com/vi/VA7JRDu8RvA/maxresdefault.jpg',
                      title: '印尼鄧紫琪-汙烏達',
                      text: '我今年剛從台灣大學畢業 夢想就是成為台灣新娘',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32B 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '22'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '把全身包起來 剩眼睛'
                      }]
                    }]
                  }
                });
    }if(event.postback.data=='China'){
        event.reply({
                  type: 'template',
                  altText: 'this is a carousel template',
                  template: {
                    type: 'carousel',
                    columns: [{
                      thumbnailImageUrl: 'https://78.media.tumblr.com/6d0c3afe55d4c6870f7e4c03fb37d4d2/tumblr_inline_opq72lESBi1ujrr7l_1280.png',
                      title: '中國電競狂妹-林勞慕',
                      text: '我最喜歡打電動了 歡迎找我吃雞 不是男生的雞雞喔 哈哈哈哈哈哈',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32A 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '20'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: 'LOL 吃雞雞'
                      }]
                    }, {
                      thumbnailImageUrl: 'https://www.mirrormedia.com.tw/assets/images/20161229173118-abe1cb9cfbb8c2bff8d05ed417f4cf9a-tablet.jpg',
                      title: '中國景甜-景甜',
                      text: '我叫景甜 我超屌 演過各個好萊塢的大片 你一定想問憑什麼? 娶我就知道了',
                      actions: [{
                        type: 'postback',
                        label: '三圍',
                        data: '32B 24 32'
                      }, {
                        type: 'postback',
                        label: '年齡',
                        data: '24'
                      }, {
                        type: 'postback',
                        label: '興趣',
                        data: '演戲 演好萊塢的戲'
                      }]
                    }]
                  }
                });
    }
    else{
        event.reply(event.postback.data)
    }




});



app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});