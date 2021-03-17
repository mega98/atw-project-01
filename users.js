const express = require('express')
const router = express.Router()

let users = [
	{id: 1, name: 'Tokoku', email: 'tokoku@gmail.com'},
	{id: 2, name: 'Dora', email: 'dora@yahoo.com'}
]

router.route('/users')
	.get(function(request, response){
		if(users.length > 0) {
			response.json({
				status: true,
				data: users,
				method: request.method,
				url: request.url
			})
		}
		response.json(users)
	})
	.post(function(request, response){
		users.push(request.body)
		response.send(users)
	})

router.put('/users/:id', function(request, response) {
	const id = request.params.id
	users.filter(user => {
		if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
	response.json(users)
})

router.delete('/users/:userId', function(request, response) {
	let id = request.params.userId
	users = users.filter(user => user.id != id)
	response.send(users)
})

module.exports = router