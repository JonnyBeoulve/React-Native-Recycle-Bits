import React from 'react';
import { 
  Image,
  Platform,
  StyleSheet,
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraComponent extends React.Component {
  /*=================================================================================================
  // This component's state will store the current permissions level, whether the front of
  // back facing camera is used, and a flash toggle.
  =================================================================================================*/
  state = {
    flashMode: Camera.Constants.FlashMode.off,
    hasCameraPermission: null,
    scanned: false,
    type: Camera.Constants.Type.back
  };

  /*=================================================================================================
  // Upon mounting permissions to access the camera will be required. If not, a message will be
  // displayed to the user.
  =================================================================================================*/
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  /*=================================================================================================
  // Here we will first render a view depending upon whether or not the user has granted 
  // camera permissions. If so, the user will be able to user their camera to take a photo,
  // flip the camera, and more.
  =================================================================================================*/
  render() {
    const { hasCameraPermission } = this.state;
    const { scanned } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera.</Text>;
    } else {
      if (scanned) {
        return (
          <View style={styles.flex}>
            <Image source={require('../../assets/images/Coming_Soon.jpg')} style={styles.comingSoonImage}/>
            <View style={styles.comingSoonTextContainer}>
              <Text style={styles.comingSoonText}>Coming Soon...</Text>
             </View>
          </View>
        );
      } else {
        return (
          <View style={styles.flex}>
            <Camera style={styles.flex} type={this.state.type}>
              <View style={styles.cameraPreviewContainer}>
                <TouchableOpacity
                  style={styles.cameraPreviewOption1}
                  onPress={this.handleCameraFlip}
                  >
                  <Text style={styles.cameraPreviewOptionText1}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraPreviewOption2}
                  onPress={this.handlePhotoScan}
                  >
                  <Text style={styles.cameraPreviewOptionText2}>
                    {' '}Scan{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraPreviewOption3}
                  onPress={this.handleFlashToggle}
                  >
                  <Text style={styles.cameraPreviewOptionText3}>
                    {' '}Flash{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }
    }
  }

  /*=================================================================================================
  // Flip between the front and back facing camera.
  =================================================================================================*/
  handleCameraFlip = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  /*=================================================================================================
  // In production this function will submit a captured image to the database to be analyzed
  // before the user is presented with information.
  =================================================================================================*/
  handlePhotoScan = () => {
    this.setState({
      scanned: true
    });
  }

  /*=================================================================================================
  // The flash button will toggle camera flash allowing users to use the app in low light situations.
  =================================================================================================*/
  handleFlashToggle = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.off
        ? Camera.Constants.Type.on
        : Camera.Constants.Type.off,
    });
  }
}

/*=================================================================================================
// ScanItemScreen styling.
=================================================================================================*/
const styles = StyleSheet.create({
  flex : {
    flex: 1,
  },
  comingSoonImage: {
    left: 10,
    width: 390,
    height: 530,
    resizeMode: 'contain',
  },
  comingSoonTextContainer: {
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
  comingSoonText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  cameraPreviewContainer: {
    height: 540,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  cameraPreviewOption1: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOption2: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOption3: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOptionText1: {
    fontSize: 20, 
    color: 'white',
    marginBottom: 30,
  },
  cameraPreviewOptionText2: {
    fontSize: 20, 
    color: 'white',
    marginLeft: 20,
    marginBottom: 30,
  },
  cameraPreviewOptionText3: {
    fontSize: 20, 
    color: 'white',
    marginLeft: 20,
    marginBottom: 30,
  }
});
