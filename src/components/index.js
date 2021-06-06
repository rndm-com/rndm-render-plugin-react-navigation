import {get, set} from 'lodash';
import React from 'react';
import {
  createSwitchNavigator,
} from 'react-navigation';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {methods} from '@rndm/render';
import convertRoutesToComponents from '../utils/convertRoutesToComponents';

const navigators = {
  StackNavigator: createStackNavigator,
  BottomTabNavigator: createBottomTabNavigator,
  MaterialBottomTabNavigator: createMaterialBottomTabNavigator,
  MaterialTopTabNavigator: createMaterialTopTabNavigator,
  DrawerNavigator: createDrawerNavigator,
  SwitchNavigator: createSwitchNavigator,
};

const components = Object.keys(navigators).map(type => ({
  type,
  value: ({routes, options, id}) => {
    const Navigator = navigators[type]();
    const screens = convertRoutesToComponents(routes);
    const reference = ref => set(methods, `react-navigation.navigators.${id}.dispatch`, get(ref, 'dispatch', get(ref, 'navigation.dispatch')));
    return (
      <NavigationContainer ref={reference} >
        <Navigator.Navigator {...options} >
          {
            Object.keys(screens).map(screen => (<Navigator.Screen name={screen} component={screens[screen]} />))
          }
        </Navigator.Navigator>
      </NavigationContainer>
    )
  },
}));

export default components;
