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

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*=================================================================================================
  // The profile screen contains information about the user. In a future update, the user will be
  // able to compare how much they recycled to other users in the community.
  =================================================================================================*/
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/images/Recycle_Bits_Black_Landscape.png')}
            style={styles.headerLogoImage}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
              source={require('../assets/images/JonnyB_Avatar.jpg')}
              style={styles.profileImage}
          />
          <Text style={styles.profileUser}>JonnyB</Text>
          <Text style={styles.profileLocation}>Seattle, WA</Text>
          <Text style={styles.profileRecycleCount}>Number of items recycled: 4</Text>
          <Text style={styles.profileLastTimeRecycled}>Last time recycled: 4/6/2018</Text>
          <View style={styles.profileAboutMeContainer}>
            <Text style={styles.profileAboutMeHeader}>About Me</Text>
            <Text style={styles.profileAboutMe}>Save the Earth. It's the only planet with chocolate.</Text>
          </View>
        </View>

        
        <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this.handleGitHubLink} style={styles.helpLink}>
              <Text style={styles.helpScanItem}>Visit the GitHub for this project.</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    );
  }
  /*=================================================================================================
  // This will direct the user to the project's GitHub repository.
  =================================================================================================*/
  handleGitHubLink = () => {
    WebBrowser.openBrowserAsync('https://github.com/JonnyBeoulve/React-Native-Recycle-Bits');
  };
}

/*=================================================================================================
// Profile styling.
=================================================================================================*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#9CC9A8',
    height: 80,
    marginTop: 10,
    marginBottom: 0,
    borderBottomColor: '#00974E',
    borderBottomWidth: 1,
  },
  headerLogoImage: {
    width: 260,
    height: 70,
    resizeMode: 'contain',
    marginTop: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    height: 300,
    marginTop: 40,
  },
  profileImage: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#507B91',
  },
  profileUser: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 24,
  },
  profileLocation: {
    color: '#aaa',
  },
  profileRecycleCount: {
    marginTop: 10,
    fontSize: 17,
  },
  profileLastTimeRecycled: {
    marginTop: 10,
    fontSize: 17,
  },
  profileAboutMeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileAboutMeHeader: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  profileAboutMe: {
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 17,
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
    color: '#75CDDD',
    textDecorationLine: 'underline',
  },
});