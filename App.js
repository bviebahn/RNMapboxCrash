/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* crashes */}
      {/* <MapboxGL.MapView style={{width: 100, height: 100}} /> */}

      {/* doesn't crash but looks weird */}
      <MapboxGL.MapView style={{flex: 1}} />
    </View>
  );
};

export default App;
