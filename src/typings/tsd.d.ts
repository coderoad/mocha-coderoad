/// <reference path="chai/chai.d.ts" />
/// <reference path="es6-promise/es6-promise.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="set/set.d.ts" />
/// <reference path="cr/globals.d.ts" />
/// <reference path="cr/cr.d.ts" />

interface CombineTestsOptions {
  dir: string;
  tutorial: {
    name: string;
    version: string;
  };
  tests: string;
  step: number;
  testPath: string;
}
