const Post = require('../models/post');
const cloudinary = require('../utilities/cloudinary');

module.exports = {
    create,
}

async function create(req, res, next) {
    const user = req.user;
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

