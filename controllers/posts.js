const Post = require('../models/post');
const cloudinary = require('../utilities/cloudinary');

module.exports = {
    create,
    explore
}

async function explore(req, res, next) {
    const posts = await Post.find({}).populate('creater');
    const tags = [];
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        for (let j = 0; j < post.tags.length; j++) {
            tags.push(post.tags[j])
        }
    }
    res.render('insightify/index', {
        title: "Insightify",
        posts: posts,
        tags: tags,
    })
}

// Create Post
async function create(req, res, next) {
    const user = req.user;
    req.body.tags = req.body.tags.split(" ");
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const post = new Post({
            ...req.body,
            image: result.secure_url,
            cloudinary_id: result.public_id,
            creater: user
        })
        await post.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/')
}

