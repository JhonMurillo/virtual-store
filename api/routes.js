const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).json({response: 'Api is Working Porperly'})
})

module.exports = router