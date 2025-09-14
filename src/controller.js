import express from "express"

import Service from "./service.js";

const router = express.Router();
const service = new Service();

router.get("/getPaths", async (req, res) => {
    res.status(200).json(await service.getPaths());
});

router.get("/getFileContent/:fileName", async (req, res) => {
    const file = req.params.fileName;
    res.send(await service.getFileContent(file));
});

export default router;