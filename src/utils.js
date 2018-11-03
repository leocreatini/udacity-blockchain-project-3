// global imports
const sha256 = require('crypto-js/sha256');

// utils
module.exports = {
  createHash: block => sha256(JSON.stringify(block)).toString(),
  getTimestamp: () => new Date().getTime().toString().slice(0,-3),
};