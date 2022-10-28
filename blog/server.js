var express = require('express'),
    app = express(),
    articles = require('./controller/articles');

    //create,read,update,delete
    app.use(express.logger());
    var posts = [];

    var notImplimented = function(req,res){
        res.send(501)
    }
    //articles
    app.get('/articles', notImplimented); 
    app.get('/articles/new', articles.new);
    app.get('/articles/:articleId', notImplimented);
    app.post('/articles',notImplimented);
    app.put('/articles/:articleId', notImplimented);
    app.del('/articles/:articleId', notImplimented);
    //comment
    app.post('/articles/:articleId/comments', notImplimented);
    app.del('/articles/:articleId/comments/:commentId', notImplimented);

app.listen(8000);