const express = require("express");
const port = 8000;

// nuevo código:
const session = require('express-session');
// código original :
const app = express();
// más código nuevo:
app.use(session({ secret: 'codingdojorocks' })); // cadena de cifrado


// carpeta estática
app.use(express.static(__dirname + "/public"));

// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views');
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');


// RUTAS
app.get('/contador', function(req, res) {
    if (req.session.count == undefined) {
        req.session.count = 0;
    }
    req.session.count++;
    /*if (req.session.count > 0) {
        req.session.count++;
    }*/
    return res.render('contador', { count: req.session.count });
});

app.get('/suma', function(req, res) {
    req.session.count++;
    res.redirect('/contador');
});

app.get('/reinicio', function(req, res) {
    req.session.count = 0;
    res.redirect('/contador');
});

// iniciar el servidor
app.listen(port, () => console.log(`Listening on port: ${port}`));