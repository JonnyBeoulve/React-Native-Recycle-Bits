import React from 'react';
import { 
  Button,
  Image,
  Platform,
  StyleSheet,
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';
import { Camera, FileSystem, Permissions } from 'expo';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default class CameraComponent extends React.Component {
  /*=================================================================================================
  // This component's state will store the current permissions level, whether the front of
  // back facing camera is used, a flash toggle, and whether or not a user has taken a photo
  // (scanned). If so, the component will render results instead of the camera. Cached Photo will
  // hold a photo upon the user clicks scan.
  =================================================================================================*/
  state = {
    cachedPhoto: null,
    flashMode: Camera.Constants.FlashMode.off,
    hasCameraPermission: null,
    scanned: false,
    type: Camera.Constants.Type.back
  };

  /*=================================================================================================
  // Upon will mount permissions to access the camera will be required. If not, a message will be
  // displayed to the user.
  =================================================================================================*/
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  /*=================================================================================================
  // Here we will first render a view depending upon whether or not the user has granted 
  // camera permissions. If so, the user will be able to user their camera to take a photo,
  // flip the camera, and turn on flash. There is also some icon related code here that displays
  // icons on the three camera buttons (flip, scan, and flash).
  =================================================================================================*/
  render() {
    const { hasCameraPermission, scanned } = this.state;
    let iconCameraFlip, iconCameraScan, iconCameraFlash;

    iconCameraFlip = Platform.OS === 'ios' 
      ? 'ios-switch'
      : 'md-switch';

    iconCameraScan = Platform.OS === 'ios' 
      ? 'ios-camera'
      : 'md-camera';

    iconCameraFlash = Platform.OS === 'ios' 
      ? 'ios-flash'
      : 'md-flash';

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera.</Text>;
    } else {
      if (scanned) {
        return (
          <View style={styles.resultsContainer}>
            <Image source={this.state.cachedPhoto} style={styles.scannedPhoto}/>
            <View style={styles.resultsTextContainer}>
              <Text style={styles.resultsRecyclable}>Yes, it's recyclable!</Text>
              <Text style={styles.resultsMaterial}>Material: Aluminum</Text>
              <Text style={styles.resultsValue}>Estimated Value: $00.15</Text>
            </View>
            <View style={styles.scanAgainContainer}>
              <View style={styles.scanAgainButtonContainer}>
                <Button onPress={this.handleScanAgain} title="Scan Another Item" color={Colors.primaryColor} />
              </View>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.flex}>
            <Camera ref={ref => { this.camera = ref; }} style={styles.flex} type={this.state.type}>
              <View style={styles.cameraPreviewContainer}>
                <TouchableOpacity
                  style={styles.cameraPreviewOption1}
                  onPress={this.handleCameraFlip}
                  >
                  <Text style={styles.cameraPreviewOptionText1}>
                    {'  '}<Ionicons name={iconCameraFlip} size={18} />{'  '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraPreviewOption2}
                  onPress={this.handlePhotoScan.bind(this)}
                  >
                  <Text style={styles.cameraPreviewOptionText2}>
                    {' '}<Ionicons name={iconCameraScan} size={20} />{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraPreviewOption3}
                  onPress={this.handleFlashToggle}
                  >
                  <Text style={styles.cameraPreviewOptionText3}>
                    {'  '}<Ionicons name={iconCameraFlash} size={18} />{'  '}
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
  // Upon clicking the scan button, this function will pass the photo to state to then be rendered
  // on the results screen.
  =================================================================================================*/
  handlePhotoScan = async function() {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        this.setState({
          cachedPhoto: photo,
          scanned: true
        });
      }

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

  /*=================================================================================================
  // Upon arriving at the results page, users can click a link on the bottom to scan another item.
  =================================================================================================*/
  handleScanAgain = () => {
    this.setState({
      scanned: false
    });
  }
}

/*=================================================================================================
// CameraComponent styling.
=================================================================================================*/
const styles = StyleSheet.create({
  flex : {
    flex: 1,
  },
  resultsContainer: {
    alignItems: 'center',
    backgroundColor: '#dee2e5',
  },
  scannedPhoto: {
    height: 340,
    resizeMode: 'contain',
  },
  resultsTextContainer: {
    height: 140,
    width: '100%',
    backgroundColor: '#dee2e5',
    marginBottom: 10,
  },
  resultsRecyclable: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 24,
    textAlign: 'center',
  },
  resultsMaterial: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    textAlign: 'center',
  },
  resultsValue: {
    marginTop: 5,
    marginBottom: 0,
    fontSize: 24,
    textAlign: 'center',
  },
  scanAgainContainer: {
    height: 70,
    width: '100%',
    alignItems: 'center',
  },
  scanAgainButtonContainer: {
    width: 180,
    alignItems: 'center',
  },
  cameraPreviewContainer: {
    height: 520,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 30,
  },
  cameraPreviewOption1: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOption2: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOption3: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOptionText1: {
    fontSize: 20, 
    color: 'white',
    backgroundColor: 'black',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
  },
  cameraPreviewOptionText2: {
    fontSize: 20, 
    color: 'white',
    backgroundColor: 'black',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 100,
    padding: 15,
  },
  cameraPreviewOptionText3: {
    fontSize: 20, 
    color: 'white',
    backgroundColor: 'black',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
  }
});
