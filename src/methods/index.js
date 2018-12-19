import { NavigationActions, StackActions } from 'react-navigation';

const methods = [
  ...Object.keys(NavigationActions).filter(i => typeof NavigationActions[i] === 'function').map(i => ({
    type: ['NavigationActions', i].join('.'),
    value: (...args) => NavigationActions[i](...args),
  })),
  ...Object.keys(StackActions).filter(i => typeof StackActions[i] === 'function').map(i => ({
    type: ['StackActions', i].join('.'),
    value: (...args) => StackActions[i](...args),
  })),
];

export default methods;
