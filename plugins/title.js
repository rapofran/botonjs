/*jslint node: true nomen: true stupid: true */

'use strict';

var og = require('open-graph');

function scrap(nick, text, message) {
    var bot = this;

    if(/^(http|https):\/\//.test(text)) {
        var title = '';

        og(url, function(err, meta){
            title = meta.title;
        })

        // does't have open-graph
        if (title === '') {
            //srap manually
        }

        bot.say(title);
    }
}

function setupPlugin(bot) {
    bot.on(bot.events.MESSAGE, scrap);
}

module.exports = setupPlugin;