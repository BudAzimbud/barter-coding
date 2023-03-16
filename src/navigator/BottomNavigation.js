import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: '#747070',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 3,
          right: 10,
          left: 10,
          borderRadius: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: ({color}) => (
            <View style={{}}>
              <AntDesign name="home" color={color} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Home}
        options={{
          tabBarLabel: 'Post',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            zIndex: -1,
          },
          tabBarIcon: ({color}) => (
            <View
              style={{
                borderColor: 'skyblue',
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
                borderWidth: 5,
                borderRadius: 50,
                zIndex: 999,
                height: 60,
                width: 60,
                marginTop: -30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons name="offer" color={color} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: ({color}) => (
            <View style={{}}>
              <Feather name="settings" color={color} size={30} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
