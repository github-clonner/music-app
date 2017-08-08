import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Touchable } from '../index';

export const Button = ({ color, text, onPress }) => {
   const style = { ...styles.button, backgroundColor: color || styles.button.backgroundColor };

   return (
       <Touchable onPress={onPress}>
          <View style={style}>
             {text}
          </View>
       </Touchable>
   );
};