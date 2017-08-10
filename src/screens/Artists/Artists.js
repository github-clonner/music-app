import React from 'react';
import { InteractionManager, View } from 'react-native';
import PropTypes from 'prop-types';
import {
    Page,
    Spinner,
    Button,
    Text
} from '../../common';
import { ArtistsList } from './ArtistsList';

import { getArtists } from '../../actions/artists';
import { logout } from '../../actions/user';
import { connect } from 'react-redux';

import styles from './styles';

class Artists extends React.Component {
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(getArtists());
        });
    }

    onLogoutPressed = () => {
        this.props.dispatch(logout());
    };

    render() {
        const { artists, currentUser } = this.props;

        return (
            <Page>
                <View style={styles.header}>
                    { currentUser && <Text.Default centered>{`Signed in as ${currentUser.firstName} ${currentUser.lastName}`}</Text.Default> }
                    <Button text={'Logout'} centered
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
    }
}

Artists.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentUser: PropTypes.object
};

export const ArtistsScreen = connect(state => ({
    artists: state.artists.artists,
    currentUser: state.user.currentUser
}))(Artists);