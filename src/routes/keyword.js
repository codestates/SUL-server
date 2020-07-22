const express = require("express");
const router = express.Router();

const { keywordController } = require("../controllers");

router.get("/get", keywordController.keyword.get);
router.post("/post", keywordController.keyword.post);
router.delete("/delete", keywordController.keyword.delete);

module.exports = router;
