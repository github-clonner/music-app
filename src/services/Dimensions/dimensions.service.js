import { Dimensions } from 'react-native';

export const dimensions = {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,

   ratioX: this.width < 375 ? (this.width < 320 ? 0.75 : 0.875) : 1,
   ratioY: this.height < 568 ? (this.height < 480 ? 0.75 : 0.875) : 1,

   base_unit: 16,
   unit: this.base_unit * this.ratioX,

   em: value => this.unit * value,
   vm: value => value * (this.width / 100),
   vh: value => value * (this.height / 100)
};