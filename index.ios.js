import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album-list';

const App = () => (
  <View style={styles.app}>
    <Header text='Albums!' />
    <AlbumList />
  </View>
);

const styles = {
  app: {
    flex: 1,
  },
};

AppRegistry.registerComponent('albums', () => App);
