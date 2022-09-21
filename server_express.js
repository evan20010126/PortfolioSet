var express = require('express');
var app = express();
var port = 80;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log('Express is running on http://localhost:' + port.toString());
});