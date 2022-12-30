import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login/Login';
import ButtonNavigation from './BottomNavigation';

const Stack = createStackNavigator();

function Navigation() {
  console.log(Stack);
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name="Public" component={ButtonNavigation} />
    </Stack.Navigator>
  );
}

export default Navigation;
