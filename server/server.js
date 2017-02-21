/**
 * Created by roy on 20-2-17.
 */
const path = require('path');

const publicPath = path.join(__dirname, '/../public');

var express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log(`Server started on ${port}`);
});