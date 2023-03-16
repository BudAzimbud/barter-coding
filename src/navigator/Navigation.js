import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login/Login';
import ButtonNavigation from './BottomNavigation';
import ProductsDetail from '../screens/Product/ProductsDetail';
import {View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
      <Stack.Screen
        name="ProductDetail"
        options={{
          title: '',
          headerShown: true,
          headerRight: () => (
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                width: 140,
                justifyContent: 'space-around',
              }}>
              <FontAwesomeIcon name="wechat" color={'orange'} size={30} />
              <FontAwesomeIcon name="shopping-cart" color={'black'} size={30} />
            </View>
          ),
        }}
        component={ProductsDetail}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
