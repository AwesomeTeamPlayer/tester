"use strict";

let client = require('./client');

async function runTest()
{
    await client.connect('wss://echo.websocket.org', 10);

    client.send('hello world 1');
    client.sendJson({'a':123});
    client.send('hello world 3');
    client.send('hello world 4');
    client.send('hello world 5');
    client.send('hello world 6');

    console.log(await client.receiveMessage());
    console.log(await client.receiveJsonMessage());
    console.log(await client.receiveMessage());
    console.log(await client.receiveMessage());
    console.log(await client.receiveMessage());
    console.log(await client.receiveMessage());
    console.log(await client.receiveMessage());

    client.close();
}

runTest();