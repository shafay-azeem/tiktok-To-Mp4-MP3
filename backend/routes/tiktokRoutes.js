const express = require("express");
const { donwloadMp4, convertMp4toMp3 } = require("../controllers/tiktokController");



const router = express.Router();

// Survivor Controller functions

router.route("/downloadMp4").post(donwloadMp4);// This endpoint handles creating a new survivor
router.route("/convertMp4toMp3").post(convertMp4toMp3);// This endpoint handles creating a new survivor







module.exports = router;