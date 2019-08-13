const express = require(`express`)
const router = express.Router()

router.get('/test',(req,resp)=>{
	
	resp.send('this is a test from a router')
	
	
})

module.exports = router