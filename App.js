import React from 'react';
import { AppRegistry,
  Platform, 
  StatusBar, 
  StyleSheet, 
  View 
}  from 'react-native';

import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

/*=================================================================================================
// This is the main entry point of the app. From here, assets and files will be loaded, and
// then the HomeScreen is rendered for the user to begin interacting with.
=================================================================================================*/
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/icon.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/JonnyB_Avatar.jpg'),
        require('./assets/images/Recycle_Bits_Black_Landscape.png'),
        require('./assets/images/Recycle_Bits_Black.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
