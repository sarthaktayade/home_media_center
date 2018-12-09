module.exports = {

	currentPlayer: {},

	start: function(youtubeurl) {
		const { exec } = require("child_process");
		const getFormat = exec("youtube-dl -F \"" + youtubeurl + "\"", function(err, stdout, stderr) {
			console.log("err - " + err)
			console.log("stdout - " + stdout)
			console.log("stderr - " + stderr)
			const formatId = module.exports.firstNumFromLastLine(stdout)
			console.log("chossing - " + formatId)
			const getURL = exec("youtube-dl -g -f " + formatId + " \"" + youtubeurl + "\"", function(err, stdout, stderr) {
				console.log("err - " + err)
				console.log("stdout - " + stdout)
				console.log("stderr - " + stderr)
				const omxPlayer = require("node-omxplayer")
				module.exports.currentPlayer =  omxPlayer(stdout)
			})
		})
	},

	stop: function() {

	},

	firstNumFromLastLine: function(string) {
		var num = ""
		const linesArr = string.split(/\r?\n/)
		const lastLine = linesArr[linesArr.length - 2]
		num = num + lastLine.split(" ")[0]
		return num
	}
}
