import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

export const Touchable = ReactTimeout(({ onPress, children, requestAnimationFrame }) => {
   const onPressOptimized = () => { requestAnimationFrame(onPress) };

   return <TouchableOpacity onPress={onPressOptimized}>{children}</TouchableOpacity>
});

Touchable.propTypes = {
    onPress: PropTypes.func.isRequired,
    requestAnimationFrame: PropTypes.func.isRequired
};