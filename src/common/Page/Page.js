import React from 'react';
import { View } from 'react-native';
import { appStyles } from '../../config/style';

export const Page = ({ style = {}, children }) => {
   const pageStyle = { ...appStyles.page, ...style };

   return (
       <View style={pageStyle}>
          {children}
       </View>
   );
};