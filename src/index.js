import express from 'express';
import ejs from 'ejs';
import path from 'path';

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.get("/**", (req, res) => {
    res.render("index.html");
}).listen(8888, () => console.log("node server is listening at port: 8888"));

app.post("/**", express.urlencoded({
    extended: true
}), (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.send("ROGER");
});