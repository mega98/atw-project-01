const express = require('express')
const userRouter = require('./router/users')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(request, response) {
	const kelas = {
		id: 1,
		name: 'Mega Krismiyati'
	}

	//console.log('Hello Word!')
	response.json(kelas)
})

app.get('/about', function(request, response) {
	response.redirect('https://expressjs.com/')
})

app.use(userRouter)

app.listen(3000, function(){
	console.log('server is okay')
})