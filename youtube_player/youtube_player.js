module.exports = {

  playYoutubeVideo: function(url, completion, error) {
    const urlResolver = require("./youtube_url_resolver.js")
    const omxPlayer = require("../core/omx_player_wrapper.js")
    console.log(urlResolver)
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
}
