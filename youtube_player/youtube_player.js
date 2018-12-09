module.exports = {

  playerWrapper: null,

  getPlayerWrapper: function() {
    if (module.exports.playerWrapper == null) {
      module.exports.playerWrapper = require("../core/omx_player_wrapper.js")
    }
    return module.exports.playerWrapper
  },

  playYoutubeVideo: function(url, completion, error) {
    const urlResolver = require("./youtube_url_resolver.js")
    const omxPlayer = module.exports.getPlayerWrapper()
    urlResolver.resolveUrl(url, function(resolvedUrl) {
      omxPlayer.start(resolvedUrl)
    }, function() {
      // some error
    })
  },

  stopPlaying: function() {
    const omxPlayer = module.exports.getPlayerWrapper()
    omxPlayer.stop()
  },

  changeVolumeUp: function(volume) {
    const omxPlayer = module.exports.getPlayerWrapper()
    omxPlayer.volumeUp()
  },

  changeVolumeDown: function(volume) {
    const omxPlayer = module.exports.getPlayerWrapper()
    omxPlayer.volumeDown()
  }
}
