const express = require('express');

const app = express();

app.use('/save', save); //do edycji po routingu

const port = process.env.PORT || 1200
const server = app.listen(port, function (err) {
    if (err) throw err;
    console.log(`> Ready on server http://localhost:${port}`);

});
module.exports = server;