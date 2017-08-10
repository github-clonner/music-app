import React from 'react';
import { InteractionManager } from 'react-native';
import PropTypes from 'prop-types';
import {
    Page,
    Spinner
} from '../../common';
import { ArtistsList } from './ArtistsList';

import { getArtists } from '../../actions/artists';
import { connect } from 'react-redux';

class Artists extends React.Component {
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(getArtists());
        });
    }

    render() {
        const { artists } = this.props;

        return (
            <Page>
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