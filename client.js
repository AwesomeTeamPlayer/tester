"use strict";
const WebSocket = require('ws');

module.exports = {

    connection: undefined,
    message: undefined,
    onMessageEvent: undefined,
    closeTimeout: undefined,

    connect: function(url, maxTimeSeconds = 60) {

        let self = this;

        this.closeTimeout = setTimeout(function() {
            console.log('#');
            console.log('# FORCE QUIT');
            console.log('#');
            self.connection.close();
        }, maxTimeSeconds * 1000);

        return new Promise(function(resolve) {
            self.connection = new WebSocket(url);
            self.connection.on('open', function open() {
                self.connection.on('message', function incoming(data) {
                    self.message = data;

                    if (self.onMessageEvent) {
                        self.onMessageEvent();
                    }
                });
                resolve()
            });
        });
    },

    send: function(message) {
        this.connection.send(message);
    },

    sendJson: function(json) {
        this.connection.send(JSON.stringify(json));
    },

    receiveMessage: function()
    {
        let self = this;

        return new Promise(function(resolve) {
            self.onMessageEvent = function()
            {
                resolve(self.message);
            };
        });
    },

    receiveJsonMessage: function()
    {
        let self = this;

        return new Promise(function(resolve) {
            self.onMessageEvent = function()
            {
                resolve(JSON.parse(self.message));
            };
        });
    },

    close: function()
    {
        clearTimeout(this.closeTimeout);
        this.connection.close();
    }
};