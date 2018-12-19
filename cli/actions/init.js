const fs = require('fs');
const { range } = require('lodash');

const current = process.cwd();

const init = (cmd = {}) => {
  const relativity = range(cmd.node ? 2 : 0).map(() => '..').join('/');
  const project = [current, relativity].filter(Boolean).join('/');
  const supporting = [project, '_supporting'].filter(Boolean).join('/');

  const rewire = [supporting, 'rewire_modules.json'].join('/');
  const modules = [
    'react-navigation',
    'react-native-tab-view',
    'react-native-safe-area-view'
  ];

  const array = JSON.parse(fs.readFileSync(rewire).toString());
  modules.forEach(m => {
    if (!array.includes(m)) array.push(m)
  });
  fs.writeFileSync(rewire, JSON.stringify(array, null, 2));
};

module.exports = init;
