import React from 'react';
import { InteractionManager, View } from 'react-native';
import PropTypes from 'prop-types';

import { getArtists } from '../../redux/actions/artists';
import { logout } from '../../redux/actions/user';
import { connect } from 'react-redux';

import { ArtistsPresentation } from './ArtistsPresentation';

class ArtistsContainer extends React.Component {
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(getArtists());
        });
    }

    onLogoutPressed = () => {
        this.props.dispatch(logout());
    };

    render() {
        return (
            <ArtistsPresentation artists={this.props.artists}
                                 currentUser={this.props.currentUser} />
        );
    }
}

Artists.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentUser: PropTypes.object
};

Artists.defaultProps = {
    artists: [],
    currentUser: null
};

export const ArtistsScreen = connect(state => ({
    artists: state.artists.artists,
    currentUser: state.user.currentUser
}))(ArtistsContainer);