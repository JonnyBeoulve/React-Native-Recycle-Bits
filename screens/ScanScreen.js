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
import CameraComponent from './children/CameraComponent';

export default class ScanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /*=================================================================================================
  // The Scan Item screen will display a header and camera imagery for scanning. CameraComponent 
  // handles the camera functionality.
  =================================================================================================*/
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={ require('../assets/images/Recycle_Bits_Black_Landscape.png')}
            style={styles.headerLogoImage}
          />
        </View>

        <CameraComponent />

      </ScrollView>
    );
  }
}

/*=================================================================================================
// ScanScreen styling.
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
  comingSoonImage: {
    marginTop: 0
  }
});
