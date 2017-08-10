import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export const ErrorMessage = ({ style, children }) => (
    <View style={[ style, styles.container ]}>
        { children }
    </View>
);