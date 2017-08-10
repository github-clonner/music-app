import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { Touchable, Text } from '../index';

export const Button = ({ style, text, centered, onPress }) => {
   const finalStyle = {
       ...styles.button,
       ...style
   };

   if (centered) {
      finalStyle.alignSelf = 'center';
   }

   return (
       <Touchable onPress={onPress}>
          <View style={finalStyle}>
             <Text.Default style={styles.text}>{text}</Text.Default>
          </View>
       </Touchable>
   );
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    centered: PropTypes.oneOfType([ PropTypes.func, PropTypes.boolean ]),
    onPress: PropTypes.func.isRequired
};