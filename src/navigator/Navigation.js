import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function Navigation() {
  console.log(Stack);
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'Login'}
        component={Login}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Navigation;
