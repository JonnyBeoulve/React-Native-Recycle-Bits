import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ScanItemScreen from '../screens/ScanItemScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ScanItem: {
      screen: ScanItemScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'ScanItem':
            iconName = Platform.OS === 'ios' 
              ? `ios-qr-scanner${focused ? '' : '-outline'}` 
              : 'md-qr-scanner';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios' 
              ? `ios-person${focused ? '' : '-outline'}` 
              : 'md-person';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
