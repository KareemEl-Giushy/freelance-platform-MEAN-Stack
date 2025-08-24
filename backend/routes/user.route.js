const router = require("express").Router();

const {register, login, editUser, getUserById} = require("../controllers/user.controller");

const multer = require("multer")

const myStorage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
        let filename = Date.now() + '.' + file.mimetype.split('/')[1]
        req.body.image = filename
        cb(null, filename)
    }
})

const upload = multer({storage: myStorage})

router.post('/register', register);
router.post('/login', login)
router.get('/:id', getUserById)
router.put('/:id', upload.single('image'), editUser)

module.exports = router;