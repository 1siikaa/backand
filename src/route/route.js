const express= require('express')
const router= express.Router()
const Controller= require("../controller/controller.js")


//............................................... Post Api .........................................................................................

router.post('/text', Controller.write)
router.get('/fetch', Controller.fetch)

module.exports = router