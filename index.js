const express = require(`express`)
const mongoose = require(`mongoose`)
const testRouter =  require('./testRouter')
const app = express()
const port = process.env.DEV_PORT || 3037

function connect(){
	mongoose.connect(`mongodb://localhost/playground`)
	.then(()=> console.log(`connected`))
	.catch((error)=>console.error(`could not connect to mongodb`,error))	
}

app.use(`test`,testRouter)

app.listen(port,()=>{
	console.log(`listening on port ` + port)
})



