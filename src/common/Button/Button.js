import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Touchable, Text } from '../index';

export const Button = ({ color, text, onPress }) => {
   const style = { ...styles.button, backgroundColor: color || styles.button.backgroundColor };

   return (
       <Touchable onPress={onPress}>
          <View style={style}>
             <Text.Default>{text}</Text.Default>
          </View>
       </Touchable>
   );
};