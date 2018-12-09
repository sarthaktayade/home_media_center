module.exports = {

	currentPlayer: null,

	player: function() {
		const omxPlayer = require("node-omxplayer")
		if (module.exports.currentPlayer == null) {
			return omxPlayer()
		}
		return module.exports.currentPlayer
	},

	start: function(urlToPlay, completion, error) {
		const logger = require("../logger/console_logger.js")
		const player = module.exports.player()
		if (player.running) {
			player.quit()
		}
		player.newSource(urlToPlay)
		player.on("error", function(err) {
			logger.log("player encountered error = " + err)
			if (error != null) {
        error(err)
      }
		})
		player.on("close", function() {
			logger.log("player encountered completed playing")
			if (completion != null) {
        completion()
      }
		})
	},

	stop: function() {
		const player = module.exports.currentPlayer
		if (player != null) {
      const logger = require("../logger/console_logger.js")
      logger.log("quitting player")
			player.quit()
		}
	}
}
