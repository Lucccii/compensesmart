import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container : {
        justifyContent : 'flex-start',
        paddingTop : 5,
        alignItems : "center",
        backgroundColor : 'white',
        width : '100%',
        height : '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    button : {
        width : 270,
        height : 65,
        backgroundColor : 'black',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
    }, txt : {
        color : 'white',
        fontSize : 20,
    }
})