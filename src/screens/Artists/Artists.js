import React from 'react';
import { InteractionManager } from 'react-native';
import PropTypes from 'prop-types';
import {
    Page,
    Text
} from '../../common';
import { getArtists } from '../../actions/artists';
import { connect } from 'react-redux';

class Artists extends React.Component {
    pagination = {
        limit: 10,
        page: 1
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(getArtists(this.pagination));
        });
    }

    render() {
        return (
            <Page>
                <Text.Default>{'Artists Page'}</Text.Default>
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