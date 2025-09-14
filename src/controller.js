const express = require("express");
const router = express.Router();

const Service = require("./service");
const service = new Service();

router.get("/getPaths", async (req, res) => {
    res.status(200).json(await service.getPaths());
});

router.get("/getFileContent/:fileName", async (req, res) => {
    const file = req.params.fileName;
    res.send(await service.getFileContent(file));
});

module.exports = router;