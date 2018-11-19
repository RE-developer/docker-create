console.log('server is starting');

var words = {
    "rainbow": 5,
    "unicorn": 3,
    "doom": -3,
    "gloom": -2
}
var express = require('express');
var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log('listening ...');
}

app.use(express.static('website'));


app.get('/add/:word/:score?', addWord);
function addWord(req, res) {
    var data = req.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if (!score) {
        reply =
            { msg: "score is required" }
    } else {

        words[word] = score;

        reply = {
            msg: "Thank you for your word"
        }
    }
    res.send(reply);
}

app.get('/all', sendAll);

function sendAll(req, res) {
    res.send(words);
}


app.get('/search/:word', searchWord);

function searchWord(req, res) {
    var word = req.params.word;
    var reply;

    if (words[word]) {
        reply = {
            status: "found",
            word: word,
            score: words[word]
        }
    }else{
        reply = {
            status: "not found",
            word : word
        }
    }
    res.send(reply);
}