const express = require("express");
const app = express();
const port = 8000;

// configuramos que la carpeta public sea estática
app.use(express.static(__dirname + "/public"));


// rutas
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//console.log(users);

// creamos una nueva ruta llama /api/users tipo GET que solo retorna un JSON en el response (res)
app.get("/api/users", (req, res) => {
    res.json(users);
});



// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));