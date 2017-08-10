import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../../../common';
import styles from './styles';

const ArtistAvatar = ({ picture }) => <Image style={styles.avatar} source={{ uri: picture }} />;

const ArtistInfo = ({ artist }) => (
    <View style={styles.artistInfo}>
        <Text.Default style={styles.artistName}>{artist.name}</Text.Default>
        <Text.Default style={styles.artistListeners}>{`Listeners: ${artist.listeners}`}</Text.Default>
    </View>
);

export const Artist = artist => (
    <View style={styles.listItem}>
        <ArtistAvatar picture={artist.image}/>
        <ArtistInfo artist={artist}/>
    </View>
);