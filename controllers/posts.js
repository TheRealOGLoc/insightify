const Post = require('../models/post');
const cloudinary = require('../utilities/cloudinary');
const Comment = require('../models/comment');

module.exports = {
    create,
    explore,
    show,
    comment
}

async function comment(req, res, next) {
    const post = await Post.findById(req.params.id);
    const user = req.user;
    try {
        const comment = new Comment({
            creater: user,
            ...req.body,
        })
        await comment.save();
        post.comments.push(comment);
        await post.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/insightify/${req.params.id}`);
}

async function show(req, res, next) {
    const post = await Post.findById(req.params.id)
    .populate("creater")
    .populate({
        path: "comments",
        populate: {
            path: "creater"
        }
    });
    try {
        res.render("insightify/show", {
            title: "My Post",
            post,
        })
    } catch (err) {
        console.log(err);
    }
    
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

