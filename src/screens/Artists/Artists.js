import React from 'react';
import { InteractionManager, View } from 'react-native';
import PropTypes from 'prop-types';
import {
    Page,
    Spinner,
    Button
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
        const { artists } = this.props;

        return (
            <Page>
                <View style={styles.header}>
                    <Button text={'Logout'} centered
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
    artists: PropTypes.arrayOf(PropTypes.object).isRequired
};

export const ArtistsScreen = connect(state => ({
    artists: state.artists.artists
}))(Artists);