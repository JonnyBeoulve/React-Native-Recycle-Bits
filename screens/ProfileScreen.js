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
        </View>

        <View style={styles.recyclingFactContainer}>
          <Text style={styles.recyclingFact}>In less than 15 years, worldwide waste is expected to double. (World Watch Institute)</Text>
        </View>
        
      </ScrollView>
    );
  }
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
    height: 60,
    marginTop: 10,
    marginBottom: 0,
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
    height: 400,
    marginTop: 40,
  },
  profileImage: {
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  profileUser: {
    marginTop: 10,
    fontSize: 17,
  },
  recyclingFactContainer: {
    alignItems: 'center',
    backgroundColor: '#9CC9A8',
    height: 120,
    marginTop: 10,
    marginBottom: 0,
  },
  recyclingFact: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 17,
    color: '#fff',
  },
  profileRecycleCount: {
    marginTop: 10,
    fontSize: 17,
  },
  profileLastTimeRecycled: {
    marginTop: 10,
    fontSize: 17,
  },
});