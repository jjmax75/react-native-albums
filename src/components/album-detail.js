import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Card from './card';
import CardSection from './card-section';

const AlbumDetail = props => (
  <Card>
    <CardSection>
      <View>
        <Text>image</Text>
      </View>
      <View>
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </View>
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumDetail;
