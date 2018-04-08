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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*=================================================================================================
  // The home page will render the logo, a clickable link to visit the scan page, the navigation
  // bar, as well as a welcome message.
  =================================================================================================*/
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/Recycle-Bits-Logo.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this.handleGitHubLink} style={styles.helpLink}>
              <Text style={styles.helpScanItem}>Visit the GitHub for this project.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Welcome, JonnyB!</Text>
        </View>
      </View>
    );
  }

  /*=================================================================================================
  // This will direct the user to the GitHub for the project.
  =================================================================================================*/
  handleGitHubLink = () => {
    WebBrowser.openBrowserAsync('https://github.com/JonnyBeoulve/React-Native-Recycle-Bits');
  };
}

/*=================================================================================================
// HomeScreen styling.
=================================================================================================*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CC9A8',
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
    color: 'rgba(96,100,109, 1)',
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
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpScanItem: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
