const express = require('express')
const yPlayer = require('./youtube_player.js')
const app = express()
const port = 3000

app.get('/playyoutube', function(req, res) {
	console.log("playing")
	yPlayer.start("https://www.youtube.com/watch?v=IWwMqa-_210")
})

app.get('stopyoutube', function(req, res) {
	console.log('stopping youtube video')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
