const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const router = require("./src/controller");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Listem in: http://localhost:${PORT}`)
});