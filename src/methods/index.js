import { CommonActions, StackActions, DrawerActions, TabActions } from '@react-navigation/native';

const actionToMethods = (actions, key) => Object.keys(actions).filter(i => typeof actions[i] === 'function').map(i => ({
  type: ['key', i].join('.'),
  value: (...args) => actions[i](...args),
}))

const methods = [
  ...actionToMethods(CommonActions, 'CommonActions'),
  ...actionToMethods(StackActions, 'StackActions'),
  ...actionToMethods(DrawerActions, 'DrawerActions'),
  ...actionToMethods(TabActions, 'TabActions'),
];

export default methods;
