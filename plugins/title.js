/*jslint node: true nomen: true stupid: true */

'use strict';

var _ = require('underscore');
var og = require('open-graph');

// hack
String.prototype.scan = function(regex) {
    var result = []

    this.replace(regex, function() {
        result.push(Array.prototype.slice.call(arguments, 1, -2));
    });

    return result;
}

function getTitle(link) {
    var title = '';

    og(link, function(err, meta){
        title = meta.title;
    })

    // does't have open-graph
    if (title === '') {
        //srap manually
    } else {
        bot.say(title);
    }
}

function scrap(nick, text, message) {
    var bot = this;

    _.each(text.scan(/(http|https):\/\//g), getTitle);
}


function setupPlugin(bot) {
    bot.on(bot.events.MESSAGE, scrap);
}

module.exports = setupPlugin;