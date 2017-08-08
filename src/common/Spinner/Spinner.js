import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

const defaultStyle = {};

export const Spinner = ({ color, centered }) => (
    <ActivityIndicator size={'large'}
                       animating
                       color={color}
                       style={ centered ? styles.centered : defaultStyle }/>
);