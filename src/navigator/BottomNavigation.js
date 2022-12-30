import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#747070',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 15,
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
              <AntDesign name="like2" color={color} size={30} />
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
                background: 'white',
                borderColor: 'orange',
                borderWidth: 5,
                borderRadius: 50,
                zIndex: 999,
                height: 60,
                width: 60,
                backgroundColor: 'white',
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
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: ({color}) => (
            <View style={{}}>
              <MaterialCommunityIcons
                name="face-man-profile"
                color={color}
                size={30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
