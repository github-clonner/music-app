import { Dimensions } from 'react-native';

const dimensions = {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height
};

dimensions.ratioX = dimensions.width < 375 ? (dimensions.width < 320 ? 0.75 : 0.875) : 1;
dimensions.ratioY = dimensions.height < 568 ? (dimensions.height < 480 ? 0.75 : 0.875) : 1;

dimensions.base_unit = 16;
dimensions.unit = dimensions.base_unit * dimensions.ratioX;

dimensions.em = value => dimensions.unit * value;
dimensions.vw = value => value * (dimensions.width / 100);
dimensions.vh = value => value * (dimensions.height / 100);

export { dimensions };