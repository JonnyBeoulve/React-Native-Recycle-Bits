import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import ProfileScreen from '../screens/ProfileScreen';

/*=================================================================================================
// The navigation, which is located at the bottom of the app, includes the Home Screen where
// the user first arrives, the scan screen where camera functionality is located, and the profile
// screen where the user can view their profile information and eventually access 
// leaderboard functionality.
=================================================================================================*/
export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Scan: {
      screen: ScanScreen,
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
          case 'Scan':
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
