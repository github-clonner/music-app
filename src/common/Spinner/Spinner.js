import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const defaultStyle = {};

export const Spinner = ({ color, centered }) => (
    <ActivityIndicator size={'large'}
                       animating
                       color={color}
                       style={ centered ? styles.centered : defaultStyle }/>
);

Spinner.propTypes = {
    color: PropTypes.string,
    centered: PropTypes.boolean
};