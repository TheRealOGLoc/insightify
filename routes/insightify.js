var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var upload = require('../utilities/multer');

/* /insightify has been added, no needs to add */

// /* GET / */
// router.get('/', function(req, res, next) {
//   res.render("insightify/index", {
//     title: "Insightify"
//   })
// });

// GET /
router.get('/', postsController.explore);

// POST /create
router.post('/create', upload.single('image'), postsController.create);

module.exports = router;

