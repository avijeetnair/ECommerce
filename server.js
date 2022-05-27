const express = require('express');

const severConfig = require('./configs/server/config');
const app = express();

app.prependOnceListener(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`)
})