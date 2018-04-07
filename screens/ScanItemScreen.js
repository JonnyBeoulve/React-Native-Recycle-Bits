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

export default class ScanItemScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={ require('../assets/images/Recycle_Bits_Black_Landscape.png')}
            style={styles.headerLogoImage}
          />
        </View>

        <View style={styles.scanContainer}>
          <Text style={styles.scanButton}>Scan</Text>
        </View>
      </ScrollView>
    );
  }
}

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
    marginBottom: 20,
  },
  headerLogoImage: {
    width: 260,
    height: 70,
    resizeMode: 'contain',
    marginTop: 5,
  },
  scanContainer: {
    height: 300,
    marginTop: 300,
    marginBottom: 0,
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
    backgroundColor: '#9CC9A8',
    paddingVertical: 20,
  },
  scanButton: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
