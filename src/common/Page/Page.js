import React from 'react';
import { View } from 'react-native';
import { appStyles } from '../../config/style';

export const Page = ({ style = {}, children }) => {
   const style = { ...appStyles.page, ...style };

   return (
       <View style={style}>
          {children}
       </View>
   );
};