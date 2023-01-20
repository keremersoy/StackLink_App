import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
export default StyleSheet.create({

    Page: {
        flex: 1,
        backgroundColor: "#FFFDD0",
    },
    Flex1: {
        flex: 2,
    },
    Flex2: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent:"space-around",
        


    },
    Image: {
        borderRadius: 70,
        width: Dimensions.get("window").width / 2.6,
        height: Dimensions.get("window").height / 5,

    },
    YaziView: {
    },
    top_container: {
        flexDirection: "row",
        margin: 20,
        alignItems: "center"
    },
    usernameText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20
    },
    txtEmail:{
        marginTop:20,
    },
    txtDuzenle:{marginTop:20},
    txtEmail:{fontSize:20},
    BottomContainer:{
        
    },


});