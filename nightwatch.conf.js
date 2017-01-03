module.exports = (function (settings) {

  //settings.test_settings.default.desiredCapabilities.chromeOptions.extensions = encode("./adnauseam.chromium.crx");
  var exts = '"args": ["--load-extension=/Users/dhowe/git/AdNauseam/bin/build/adnauseam.chromium"]}';
  settings.test_settings.default.desiredCapabilities.chromeOptions = {
    'extensions': [ encode("./adnauseam.chromium.crx") ]
  }
  return settings;
  //["--load-extension=/Users/dhowe/git/AdNauseam/bin/build/adnauseam.chromium"];

})(require('./nightwatch.json'));

function encode(file) {
  var stream = require('fs').readFileSync(file);
  return new Buffer(stream).toString('base64');
}
