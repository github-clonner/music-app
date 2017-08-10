import { dimensions } from '../../../services';
import { appStyles } from '../../../config/style';

export default {
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: dimensions.width,
        height: dimensions.vh(20)
    },
    artistInfo: {
        position: 'absolute',
        paddingLeft: 10
    },
    artistName: {
        color: '#fff',
        fontSize: appStyles.fonts.fontXXXL
    },
    artistListeners: {
        color: '#fff',
        fontSize: appStyles.fonts.fontL
    }
}