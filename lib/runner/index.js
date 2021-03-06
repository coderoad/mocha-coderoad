"use strict";
var start_runner_1 = require('./start-runner');
var runner_process_1 = require('./runner-process');
var isWindows = window.navigator.appVersion.indexOf('Win') > -1;
function runner(_a) {
    var dir = _a.dir, taskPosition = _a.taskPosition, handleResult = _a.handleResult, testPath = _a.testPath;
    if (isWindows) {
        testPath = testPath.split('\\').join('\\\\');
        testPath = testPath.split('/').join('\\\\');
    }
    var runner = runner_process_1.default({ dir: dir, taskPosition: taskPosition, testPath: testPath });
    return start_runner_1.default({ runner: runner, handleResult: handleResult, taskPosition: taskPosition });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runner;
