'use strict';

const server = require('..');
const assert = require('assert').strict;

assert.strictEqual(server(), 'Hello from server');
console.info('server tests passed');
