const router = require("express").Router();

const { createService, getServices, getServiceById, getMyServices, deleteService } = require("../controllers/service.controller")

const multer = require("multer")

const myStorage = multer.diskStorage({
    destination: './public/services',
    filename: (req, file, cb) => {
        let filename = Date.now() + '.' + file.mimetype.split('/')[1]
        req.body.image = filename
        cb(null, filename)
    }
})

const upload = multer({storage: myStorage})

router.get('/', getServices)
router.get('/:id', getServiceById)
router.get('/u/:id', getMyServices)
router.post('/create', upload.single('image') ,createService)
router.delete('/:id', deleteService)


module.exports = router