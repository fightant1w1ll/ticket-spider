import express from 'express';
import ejs from 'ejs';
import path from 'path';

var app = express();
app.use(express.static('static'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.get("/", (req, res) => {
    res.render("index.html");
});
app.listen(8888);