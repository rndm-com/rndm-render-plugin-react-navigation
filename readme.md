# RNDM Render Plugin: React Navigation

## About

This plugin provides functionality for [RNDM Render package](https://github.com/rndm-com/rndm-render) when integrating React Navigation.

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-react-navigation
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-react-navigation';
```

## Usage

The React Navigation Plugin contains components, methods and middleware that can be described inside your JSON API.

Full documentation of [React Navigation](https://reactnavigation.org/)

### Components

The components included within this plugin make use of the 'create...()' functions but are named after the type of Navigator generated. These are:

- StackNavigator
- BottomTabNavigator
- TopTabNavigator
- DrawerNavigator
- SwitchNavigator

These Navigators are comprised of different Screens, which take the key of their name as the route name.

**Example**

```javascript
{
    type: 'react-navigation.DrawerNavigator',
    props: {
        routes: {
            Screen: {
                type: 'react-native.View',
                props: {
                    style: {
                        flex: 1,
                        backgroundColor: 'red',,
                    },
                },
            },
        },
    },
}

```

In the example above, you can see that a single screen is provided to a DrawerNavigator, which will take up the full height of the view and will appear red.

### Methods

The methods included are a grouping of Navigation and Stack actions provided by the React Navigation Package. These are mainly used for navigation around your application.

**Example**

```javascript
{
    type: 'react-navigation.StackNavigator',
    props: {
        routes: {
            Screen: {
                type: 'react-native.TouchableOpacity',
                props: {
                    onPress: {
                        isFunc: true,
                        type: 'react-navigation.push',
                        args: [
                            'Other',
                        ],
                    },
                    children: {
                        type: 'react-native.View',
                        props: {
                            style: {
                                flex: 1,
                                backgroundColor: 'red',
                            },
                        },
                    },
            },
            Other: {
                type: 'react-native.View',
                props: {
                    style: {
                        flex: 1,
                        backgroundColor: 'yellow',
                    },
                },
            },
        },
    },
}

```

In the example above, we have a StackNavigator that contains view that will call the push method to navigate to a second screen called 'Other'.

A second way to do this is by accessing the dispatch method within the navigators passed in as part of this package:

**Example**

```javascript
{
    type: 'react-navigation.StackNavigator',
    props: {
        routes: {
            Screen: {
                type: 'react-native.TouchableOpacity',
                props: {
                    onPress: {
                        isFunc: true,
                        type: 'react-navigation.navigators.root.dispatch',
                        args: [
                            {
                                type: 'Navigation/PUSH',
                                routeName: 'Other'
                            }
                        ],
                    },
                    children: {
                        type: 'react-native.View',
                        props: {
                            style: {
                                flex: 1,
                                backgroundColor: 'red',
                            },
                        },
                    },
            },
            Other: {
                type: 'react-native.View',
                props: {
                    style: {
                        flex: 1,
                        backgroundColor: 'yellow',
                    },
                },
            },
        },
    },
}

```

### Middleware

RNDM transfers the ability to include the two middleware aspects from React Navigation to your project. These are:

[withNavigation](https://reactnavigation.org/docs/en/with-navigation.html)

[withNavigationFocus](https://reactnavigation.org/docs/en/with-navigation-focus.html)

**Example**

```javascript
{
    type: 'react-navigation.StackNavigator',
    props: {
        routes: {
            Screen: {
                type: 'react-native.TouchableOpacity',
                props: {
                    middleware: [
                        middleware: 'react-navigation.withNavigation',
                    ],
                    onPress: {
                        isFunc: true,
                        type: 'react-navigation.navigators.root.dispatch',
                        args: [
                            {
                                type: 'Navigation/PUSH',
                                routeName: 'Other'
                            }
                        ],
                    },
                    children: {
                        type: 'react-native.View',
                        props: {
                            style: {
                                flex: 1,
                                backgroundColor: 'red',
                            },
                        },
                    },
            },
            Other: {
                type: 'react-native.View',
                props: {
                    middleware: [
                        middleware: 'react-navigation.withNavigationFocus',
                    ],
                    style: {
                        flex: 1,
                        backgroundColor: 'yellow',
                    },
                },
            },
        },
    },
}

```

#### Examples

Full examples can be found in the example library found in this project.

https://github.com/rndm-com/rndm-render-plugin-react-navigation/tree/master/examples

## CLI

The CLI for this plugin adds a number of rewired packages to the '_supporting/rewire_modules.json' file. These are files that needs to be run through the Babel Compiler prior to usage when running the React Native Web version of your project.

To Run this you can call the following script in the command line:

```sh
render-plugin-react-navigation init
```

Alternatively, add the following into the '_supporting/rewire_modules.json' file if you have not already done so:

```json'
...
"react-navigation",
"react-native-tab-view",
"react-native-safe-area-view",
...
```
