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

import CameraComponent from '../components/CameraComponent';

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
    backgroundColor: Colors.primaryColor,
    height: 60,
    marginTop: 10,
    marginBottom: 0,
    borderBottomColor: Colors.primaryColorDark,
    borderBottomWidth: 1,
  },
  headerLogoImage: {
    width: 220,
    height: 50,
    resizeMode: 'contain',
    marginTop: 5,
  }
});
