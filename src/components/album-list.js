import React, { Component } from 'react';
import { View } from 'react-native';

import AlbumDetail from './album-detail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  renderAlbums(albums) {
    return albums.map(album => (
      <AlbumDetail key={album.url} album={album} />
    ));
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState(
        {
          albums: data,
        }
      ));
  }

  render() {
    return (
      <View>
        {this.renderAlbums(this.state.albums)}
      </View>
    );
  }
}

export default AlbumList;
