var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var upload = require('../utilities/multer');

/* /insightify has been added, no needs to add */


// GET /
router.get('/', postsController.explore);

// GET /like
router.get('/like', postsController.showLikes);

// GET /mypost
router.get('/mypost', postsController.showMyPosts);

// GET /:id
router.get("/:id", postsController.show);

// POST /create
router.post('/create', upload.single('image'), postsController.create);

// POST /refresh
router.post('/refresh', postsController.refresh);

// POST /search
router.post('/search', postsController.search);

// POST /:id/like
router.post("/:id/like", postsController.like);

// POST /:id/comment
router.post('/:id/comment', postsController.comment);

// POST /:id/update
router.post('/:id/update', postsController.updatePost);

// DELETE /:id/delete
router.delete('/:id/delete', postsController.deletePost)



module.exports = router;

