import path from "path";
import { fileURLToPath } from 'url';
import express from "express"
import router from "./src/controller.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Listem in: http://localhost:${PORT}`)
});