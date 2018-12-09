const logger = require("./logger/console_logger.js")
const express = require("express")
const app = express()
const http = require("http").Server(app);
const io = require("socket.io")(http)
const port = 3000

const youtubePlayer = require("./youtube_player/youtube_player.js")

io.on("connection", function(socket) {
	logger.log("socket connection established")
	socket.on("play", function() {
		youtubePlayer.playYoutubeVideo("https://www.youtube.com/watch?v=IWwMqa-_210")
	})
})

app.get('/playyoutube', function(req, res) {
	logger.log("playing")
})

app.get('stopyoutube', function(req, res) {
	console.log('stopping youtube video')

})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))