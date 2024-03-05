var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var upload = require('../utilities/multer');

/* /insightify has been added, no needs to add */


// GET /
router.get('/explore', postsController.explore);

// GET /
// router.get('/mypost', postsController.explore);

// GET /:id
router.get("/:id", postsController.show);

// POST /create
router.post('/create', upload.single('image'), postsController.create);

//POST /:id/comment
router.post('/:id/comment', postsController.comment);

//DELETE /:id/delete
router.delete('/:id/delete')

module.exports = router;

