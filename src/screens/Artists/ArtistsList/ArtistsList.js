import React from 'react';
import { FlatList } from 'react-native';
import { Artist } from './ArtistListItem';

const getArtistId = artist => artist.id;

const renderArtist = ({ index, item, separators }) => Artist(item);

export const ArtistsList = ({ artists }) => (
    <FlatList data={artists}
              keyExtractor={getArtistId}
              renderItem={renderArtist} />
);