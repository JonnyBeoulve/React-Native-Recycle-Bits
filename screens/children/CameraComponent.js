import React from 'react';
import { 
  StyleSheet,
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraComponent extends React.Component {
  /*=================================================================================================
  // This component's state will store the current permissions level and whether the front of
  // back facing camera is used.
  =================================================================================================*/
  state = {
    hasCameraPermission: null,
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
  // The Scan Item screen will display a header and camera imagery for scanning. CameraComponent 
  // handles the camera functionality.
  =================================================================================================*/
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera.</Text>;
    } else {
      return (
        <View style={styles.flex}>
          <Camera style={styles.flex} type={this.state.type}>
            <View style={styles.cameraPreviewContainer}>
              <TouchableOpacity
                style={styles.cameraPreviewOptions}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={styles.cameraPreviewOptionsText}>
                  {' '}Flip{' '}
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
// ScanItemScreen styling.
=================================================================================================*/
const styles = StyleSheet.create({
  flex : {
    flex: 1,
  },
  cameraPreviewContainer: {
    height: 540,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  cameraPreviewOptions: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraPreviewOptionsText: {
    fontSize: 20, 
    marginBottom: 30, 
    color: 'white',
  }
});
