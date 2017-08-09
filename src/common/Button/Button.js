import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    centered: PropTypes.boolean,
    onPress: PropTypes.func.isRequired
};