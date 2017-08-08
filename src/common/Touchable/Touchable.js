import React from 'react';
import { TouchableOpacity } from 'react-native';
import ReactTimeout from 'react-timeout';

export const Touchable = ReactTimeout(({ onPress, children, requestAnimationFrame }) => {
   const onPressOptimized = (onPress) && requestAnimationFrame(onPress);

   return <TouchableOpacity onPress={onPressOptimized}>{children}</TouchableOpacity>
});