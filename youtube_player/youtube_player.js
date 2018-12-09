module.exports = {

  playYoutubeVideo: function(url, completion, error) {
    const urlResolver = require("./youtube_url_resolver.js")
    const omxPlayer = require("../core/omx_player_wrapper.js")
    urlResolver.resolveUrl(url, function(resolvedUrl) {
      omxPlayer.start(resolvedUrl)
    }, function() {
      // some error
    })
  },

  stopPlaying: function() {
    const omxPlayer = require("./core/omx_player_wrapper.js")
    omxPlayer.stop()
  }

  changeVolumeUp: function(volume) {
    const omxPlayer = require("./core/omx_player_wrapper.js")
    omxPlayer.volUp()
  }

  changeVolumeDown: function(volume) {
    const omxPlayer = require("./core/omx_player_wrapper.js")
    omxPlayer.volDown()
  }
}
