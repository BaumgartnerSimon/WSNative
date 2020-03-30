import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./Login";
import Home from "./Home";

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
      screen: Home
    }
});

export default AppNavigator
