import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Touchable, Text } from '../index';

export const Button = ({ color, text, centered, onPress }) => {
   const style = {
      ...styles.button,
      backgroundColor: color || styles.button.backgroundColor
   };

   if (centered) {
      style.alignSelf = 'center';
   }

   return (
       <Touchable onPress={onPress}>
          <View style={style}>
             <Text.Default style={styles.text}>{text}</Text.Default>
          </View>
       </Touchable>
   );
};