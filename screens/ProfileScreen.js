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
import { Ionicons } from '@expo/vector-icons';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*=================================================================================================
  // The profile screen contains information about the user along with a link to the project's GitHub
  // repository. In a future update, the user will b able to compare how much they recycled to other 
  // users in the community.
  =================================================================================================*/
  render() {
    let iconLocationCircle;

    iconLocationCircle = Platform.OS === 'ios' 
      ? 'ios-pin'
      : 'md-pin';

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
          <Text style={styles.profileLocationText}>Seattle, WA</Text>
          <Text style={styles.profileRecycleCount}>4</Text>
          <Text style={styles.profileRecycleCountText}>Items Recycled</Text>
          <Text style={styles.profileLastTimeRecycled}>4/6/2018</Text>
          <Text style={styles.profileLastTimeRecycledText}>Last Recycled</Text>
        </View>

        
        <View style={styles.linkContainer}>
            <TouchableOpacity onPress={this.handleGitHubLink} style={styles.linkOpacity}>
              <Text style={styles.linkText}>Visit the GitHub for this project.</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    );
  }
  /*=================================================================================================
  // This will direct the user to the project's GitHub repository in a browser window.
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
    backgroundColor: '#dee2e5',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#9CC9A8',
    height: 60,
    marginTop: 10,
    marginBottom: 0,
    borderBottomColor: '#00974E',
    borderBottomWidth: 1,
  },
  headerLogoImage: {
    width: 220,
    height: 50,
    resizeMode: 'contain',
    marginTop: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    height: 400,
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
  profileLocationText: {
    color: '#aaa',
  },
  profileRecycleCount: {
    marginTop: 10,
    fontSize: 34,
  },
  profileRecycleCountText: {
    marginTop: 10,
    fontSize: 17,
  },
  profileLastTimeRecycled: {
    marginTop: 10,
    fontSize: 34,
  },
  profileLastTimeRecycledText: {
    marginTop: 10,
    fontSize: 17,
  },
  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkOpacity: {
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    color: '#9CC9A8',
    textDecorationLine: 'underline',
  },
});