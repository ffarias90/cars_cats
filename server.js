const express = require("express");
const app = express();
const port = 8000;

// configuramos que la carpeta public sea estática
app.use(express.static(__dirname + "/public"));

//datos


let cats = [{
        codigo: "don",
        foto: "don_gato.jpg",
        name: "Don Gato",
        favoriteFood: "Spaghetti",
        age: "4",
        sleepingSpots: "en el callejon"
    },
    {
        codigo: "benito",
        foto: "benito.jpg",
        name: "Benito",
        favoriteFood: "Lasaña",
        age: "2",
        sleepingSpots: "en el basurero"
    },
    {
        codigo: "cucho",
        foto: "cucho.jpg",
        name: "Cucho",
        favoriteFood: "ravioles",
        age: "2",
        sleepingSpots: "en la ventana"
    },
    {
        codigo: "demostenes",
        foto: "demostenes.jpg",
        name: "Demostenes",
        favoriteFood: "pescados",
        age: "3",
        sleepingSpots: "en la calle"
    },
    {
        codigo: "espanto",
        foto: "espanto.jpg",
        name: "Espanto",
        favoriteFood: "salmón",
        age: "3",
        sleepingSpots: "en donde sea"
    }
];

// rutas
// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views');
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');

/*app.get("/cars", (req, res) => {
    res.render('cars');
});

app.get("/cars/new", (req, res) => {
    res.render('new');
});
*/


app.get("/cats", (req, res) => {
    res.render("cats", { cats: cats });
});

// codigo para informacion individual 
app.get("/:codigo", (req, res) => {
    // llega desde la url
    let codigo = req.params.codigo;
    // tenemos que encontrar el objeto con los datos del  gato
    let gatoEnviar = cats.find(cat => cat.codigo == codigo);
    // devolvemos un template ejs con los datos del gato
    res.render("cats_info", { cat: gatoEnviar });
});










// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));