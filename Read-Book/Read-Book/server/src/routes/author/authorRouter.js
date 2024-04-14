
const router = require("express").Router();
const authorController = require('../../controllers/bookController/authorController');

router.get("/",authorController.getAllAuthor);


module.exports = router;