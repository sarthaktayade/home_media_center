module.exports = {

  loggingEnabled: true,

  log: function(logstring) {
    if (module.exports.loggingEnabled) {
        console.log(logstring)
    }
  }
}
