var path = require('path');

function addPaths(files) {
  return files.map(function(subArray) {
    return subArray.map(function(test) {
      return path.join(config.tutorialDir, test);
    });
  });
}

var runner = require('../../src/runner').default;
var rootDir = __dirname.split('/');
var config = {
  dir: rootDir.slice(0, rootDir.length - 1).join('/'),
  tutorialDir: path.join(__dirname, '..', '/tests'),
  testRunnerOptions: {
    babel: true
  }
};
function handleLog(log) {
  return log;
}
function handleResult(result) {
  return result;
}

exports.getRunner = function getRunner(files) {
  files = addPaths(files);
  return runner(files, config, handleResult, handleLog);
}
