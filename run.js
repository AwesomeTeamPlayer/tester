"use strict";

const tape = require('tape');

let client = require('./client');

const httpUrl = process.env.HTTP_URL;
const wsUrl = process.env.WS_URL;

const maxTimeSeconds = process.env.MAX_TIME_SECONDS;

tape.test('Welcome message', async function (assert) {

    await client.connect(wsUrl, maxTimeSeconds);

    let receivedMessage = await client.receiveMessage();
    assert.equal('Hello world!', receivedMessage);

    client.close();

    assert.end();
});

