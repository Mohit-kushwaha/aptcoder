const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const empCtrl = require('../controllers/empCtrl')


router.post('/home', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.post('/createEmployee', empCtrl.addEmp)


router.get('/getEmployee', empCtrl.getEmp)
module.exports = router