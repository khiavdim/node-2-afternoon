const express = require('express')
const app = express()
const port = 3001
const mc = require('./controllers/message_controller')

//Top Level Middleware
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

//Endpoints
const messageBaseURL = "/api/messages"
app.post(messageBaseURL, mc.create)
app.get(messageBaseURL, mc.read)
app.put(`${messageBaseURL}/:id`, mc.update)
app.delete(`${messageBaseURL}/:id`, mc.delete)

//Listen from Port
app.listen(port, () => {
    console.log(`Server listening from port ${port}`)
})