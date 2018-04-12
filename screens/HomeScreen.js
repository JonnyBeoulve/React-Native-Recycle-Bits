import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*=================================================================================================
  // The home page will render the logo, a random fact about recycling (randomization will be
  // added in a future update), and a welcome message. Eventually, this page will serve as a hub
  // with news, user activity, and more.
  =================================================================================================*/
  render() {
    let iconInfoCircle;

    iconInfoCircle = Platform.OS === 'ios' 
      ? 'ios-information-circle'
      : 'md-information-circle';

    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/Recycle_Bits_Black.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.recyclingFactContainer}>
            <Text style={styles.iconInfo}>
              <Ionicons name={iconInfoCircle} size={28}/>
            </Text>
            <Text style={styles.recyclingFact}>Aluminum is 100 percent recyclable and retains its properties indefinitely. Nearly 33 percent of aluminum nationwide ends up in landfills.</Text>
          </View>
        </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Welcome, JonnyB!</Text>
        </View>
      </View>
    );
  }
}

/*=================================================================================================
// HomeScreen styling.
=================================================================================================*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
    marginTop: 140,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: '#b3ffd9',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  recyclingFactContainer: {
    alignItems: 'center',
    height: 120,
    marginTop: 30,
    marginBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconInfo: {
    color: Colors.primaryTextColor,
  },
  recyclingFact: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 17,
    color: Colors.primaryTextColor,
  }
});
