import { noop, get, set } from 'lodash';
import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { methods } from '@rndm/render';
import convertRoutesToComponents from '../utils/convertRoutesToComponents';

const navigators = {
  StackNavigator: createStackNavigator,
  BottomTabNavigator: createBottomTabNavigator,
  TopTabNavigator: createMaterialTopTabNavigator,
  DrawerNavigator: createDrawerNavigator,
  SwitchNavigator: createSwitchNavigator,
};

const components = Object.keys(navigators).map(type => ({
  type,
  value: ({ routes, options, id }) => {
    const Navigator = navigators[type](convertRoutesToComponents(routes), options);
    const ref = ref => set(methods, `react-navigation.navigators.${id}.dispatch`, ref.navigation.dispatch);
    return <Navigator ref={ref}/>;
  }
}));

export default components;
