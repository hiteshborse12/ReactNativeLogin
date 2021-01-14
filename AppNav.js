import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './login'; 
import TabView from './TabView'; 
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={login}
          options={{
            title: 'login', //Set Header Title
            headerStyle: {
              backgroundColor: 'red', //Set Header color
            },
            headerLeft: null,
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontSize:25,
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
     
     <Stack.Screen
          name="TabView"
          component={TabView}
          options={{
            title: 'Dashboard', //Set Header Title
            headerStyle: {
              backgroundColor: 'red', //Set Header color
            },
            headerLeft: null,
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontSize:25,
              fontWeight: 'bold', //Set Header text styleyle
            },
            headerRight: () => (
              <Button
              onPress={() => alert('Logout')}
                title="↩️"
                color='white'
              />
            ),
          }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
