"use strict";

let client = require('./client');

const url = process.env.URL;
const maxTimeSeconds = process.env.MAX_TIME_SECONDS;

async function runTest()
{
    await client.connect(url, maxTimeSeconds);

    console.log(await client.receiveMessage());

    client.close();
}

runTest();