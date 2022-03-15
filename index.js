const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', function(request, response){
    response.render('home');
});
app.get('/home', function(request, response){
    response.render('home', {name: 'John Doe'});
});

app.post('/process-data', urlEncodedParser, function(request, response){
    response.end('Thankyou '+ request.body.weight+ '' + request.body.height);

});
app.listen(port);
console.log('Node server started on port 3000');