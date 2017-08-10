import { appStyles } from "../../config/style";

export default {
    button: {
        ...appStyles.centeredContent,
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 200,
        height: 40,
        padding: 5,
        borderRadius: 18
    },
    text: {
        fontSize: appStyles.fonts.fontL,
        color: '#fff',
        fontWeight: 'bold'
    }
}