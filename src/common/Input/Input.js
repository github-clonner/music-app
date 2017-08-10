import React from 'react';
import { TextInput } from 'react-native';
import defaultStyle from './styles';

export const Input = props => {
   const { style } = props;
   const finalStyle = [ defaultStyle ];

   if (style) {
      finalStyle.push(style);
   }

   return <TextInput style={finalStyle}
                     underlineColorAndroid={'rgba(0,0,0,0)'}
                     {...props} />
};