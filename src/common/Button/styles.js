import { appStyles } from '../../config/style';

export default {
   button: {
      ...appStyles.centeredContent,
      flexDirection:   'row',
      backgroundColor: '#33951d',
      width: 200,
      height: 40,
      padding: 5,
      borderRadius: 18
   },
   text: {
      fontSize: appStyles.fonts.fontL,
      fontWeight: 'bold'
   }
}