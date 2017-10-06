import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album-list';

const App = () => (
  <View>
    <Header text='Albums!' />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
