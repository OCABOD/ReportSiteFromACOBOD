const { Users, Blogs, Messages, Letters } = require('./db.js');
const { urlencoded } = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');

var db = {
    Users: new Users(),
    Blogs: new Blogs(),
    Messages: new Messages(),
    Letters: new Letters()
};


var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({
    extended: true
}));

app.get('/getLettersByReciever/:id', function(request, result){
    result.json(db.Letters.GetLettersToReciever(parseInt(request.params.id)))
})

app.get('/getUser/:id', function(req, res) {
    res.json(db.Users.Find(parseInt(req.params.id)));
});

app.get('/getBlog/:id', function(req, res) {
    let id = parseInt(req.params.id);
    let blog = db.Blogs.Find(id);
    let owner = db.Users.Find(parseInt(blog.ownerId));
    let messages = db.Messages.GetMessagesToBlog(id);

    res.json({
        owner,
        messages,
        ...blog
    });
});

app.post('/file', (req, res) => {
    console.log(req.body);
});

app.post('/register', (req, res) => {
    console.log(req.body)
    db.Users.Add(req.body.name, req.body.login, req.body.password, req.body.surname)
    db.Users.Save()
});




app.listen(process.env.PORT || 8081);

console.log(8081)