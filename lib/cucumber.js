// This file returns an object containing a collection of cucumber profiles
// See https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#profiles

const path = require('path');
const requireAll = require('require-all');

// Read all of the profiles and creates an object with the filename as a key
// (excluding the extension) and the returned profile object as the value.
const profiles = requireAll({
  dirname: path.resolve(__dirname, '..', 'profiles'),
});

// Convert to profile objects into cucumber profiles. This is an object with
// the filename as a key (excluding extension) and a set of Cucumber command
// line arguments as the value.
const cucumberProfiles = {};

Object.keys(profiles).forEach((profileName) => {
  const profileJSON = JSON.stringify(profiles[profileName]);
  const profileArgs = `--compiler js:babel-register --world-parameters ${profileJSON}`;
  cucumberProfiles[profileName] = profileArgs;
});

module.exports = cucumberProfiles;
