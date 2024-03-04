const multer = require('multer');
const path = require('path');

const extType = ['.jpg', '.PNG', '.png', '.jpeg'];

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (!extType.includes(ext)) {
            cb(new Error('File type is not supported'));
            return;
        }
        cb(null, true);
    }
})