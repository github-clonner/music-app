import theme from './theme';
import { dimensions } from '../../services';

const fontSizes = {
   fontXS: 9,
   fontS: 10,
   fontM: 12,
   fontL: 14,
   fontXL: 16,
   fontXXL: 18,
   fontXXXL: 25
};

export const appStyles = {
   page: {
      flex: 1,
      backgroundColor: theme.app.bgColor
   },
   centered: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   header: {
      fontSize: fontSizes.fontXXXL,
      color: '#000',
      fontFamily: theme.app.headerFont,
      backgroundColor: 'rgba(0,0,0,0)'
   },
   text: {
      fontSize: fontSizes.fontM,
      color: '#000',
      fontFamily: theme.app.defaultFont,
      backgroundColor: 'rgba(0,0,0,0)'
   },
   fonts: fontSizes,
   defaultPadding: 10
};