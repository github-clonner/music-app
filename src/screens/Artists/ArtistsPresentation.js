import React from 'react';
import {
    Page,
    Spinner,
    Button,
    Text
} from '../../common';
import { ArtistsList } from './ArtistsList';
import { text } from '../../config';

import styles from './styles'

export const ArtistsPresentation = ({ currentUser, artists }) => (
    <Page>
        <View style={styles.header}>
            { currentUser && <Text.Default centered>{text.auth.signedInAs(`${currentUser.firstName} ${currentUser.lastName}`)}</Text.Default> }
            <Button text={text.auth.logout} centered
                    style={styles.logoutButton}
                    onPress={this.onLogoutPressed} />
        </View>
        {
            artists.length
                ? <ArtistsList artists={artists}/>
                : <Spinner centered/>
        }
    </Page>
);