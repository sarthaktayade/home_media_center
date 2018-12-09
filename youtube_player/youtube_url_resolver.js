module.exports = {

  currentProcess: null,

  resolveUrl: function(youtubeUrl, success, error) {
    const logger = require("../logger/console_logger.js")
    const { exec } = require("child_process")
		module.exports.currentProcess = exec("youtube-dl -F \"" + youtubeUrl + "\"", function(err, stdout, stderr) {
      if (stdout != null) {
        const formatInfo = stdout.trim()
        logger.log("retrieved format info = " + formatInfo)
        const formatId = module.exports.firstNumFromLastLine(stdout)
        logger.log("choosing formatId = " + formatId)
        module.exports.currentProcess = exec("youtube-dl -g -f " + formatId + " \"" + youtubeUrl + "\"", function(err, stdout, stderr) {
          if (stdout != null) {
              const resolvedUrl = stdout.trim()
              success(resolvedUrl)
              logger.log("resolved url = " + resolvedUrl)
          } else {
            logger.log("err - " + err)
            logger.log("stderr - " + stderr)
            logger.log("")
            if (error != null) {
              error("error retrieving resolved url")
            }
          }
        })
      } else {
        logger.log("err - " + err)
        logger.log("stderr - " + stderr)
        logger.log("error retrieving format urls")
        if (error != null) {
          error("error retrieving format urls")
        }
      }
    })
  },

  firstNumFromLastLine: function(string) {
    var num = ""
    const linesArr = string.split(/\r?\n/)
    const lastLine = linesArr[linesArr.length - 2]
    num = num + lastLine.split(" ")[0]
    return num
  }
}
