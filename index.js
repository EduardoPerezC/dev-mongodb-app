const mongoose = require(`mongoose`)

mongoose.connect(`mongodb://localhost/playground`)
	.then(()=> console.log(‘connected’))
	.catch((error)=>console.error(‘could not connect to mongodb’,error))