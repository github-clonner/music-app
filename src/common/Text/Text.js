import React from 'react';
import { Text } from 'react-native';
import { appStyles } from '../../config/style';

const BaseText = (props, defaultStyle) => {
   const { style, children, centered } = props;

   let finalStyle = [ defaultStyle ];

   if (centered) {
      finalStyle.push(appStyles.centeredText);
   }

   if (props.bold) {
      finalStyle.fontWeight = 'bold';
   }

   if (style) {
      finalStyle.push(style);
   }

   return <Text style={ finalStyle }>{ children }</Text>;
};

export const Default = props => BaseText(props, appStyles.text);
export const Header = props => BaseText(props, appStyles.header);