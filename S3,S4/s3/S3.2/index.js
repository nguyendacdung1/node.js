var express = require('express'),
    app = express();


app.set('views', './views');
app.set('view engine', 'jade');

memberAPI.get('/', function(req, res) {
    res.send('Member page!');
});

memberAPI.get('/profile', function(req, res) {
    res.send('Member profile page!');
});

memberAPI.get('/changepassword', function (req, res) {
    res.send('Member change  password page!');
});


var adminAPI = express.Router();
adminAPI.get('/', function(req, res) {
    res.send('Admin page!');
});

app.use('/api/member', memberAPI);

app.use('/api/admin', adminAPI);

app.use(express.static(__dirname + '/public'));

app.listen(8080);