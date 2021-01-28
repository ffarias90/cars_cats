const express = require("express");
const app = express();
const port = 8000;

// configuramos que la carpeta public sea estática
app.use(express.static(__dirname + "/public"));


// rutas
// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views');
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');

app.get("/cars", (req, res) => {
    res.render('cars');
});

app.get("/cats", (req, res) => {
    res.render('cats');
});

app.get("/cars/new", (req, res) => {
    res.render('new');
});



// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));