const {Router} = require('express')
const controller = require('./controller')
const router = Router()


router.post("/userSignup", controller.userSignup);
router.post("/userLogin", controller.userLogin);



module.exports = router;