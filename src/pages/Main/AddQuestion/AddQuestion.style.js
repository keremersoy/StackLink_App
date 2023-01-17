import { StyleSheet,Dimensions } from "react-native";
const deviceDimensions=Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0E9D2"
    },
    inner_container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        margin:5
    },
    image:{
        marginTop:15,
        borderRadius:5,
        backgroundColor:"gray",
        width:deviceDimensions.width-30,
        height:deviceDimensions.height/3
    },
    input_container:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:5,
        marginTop:15,
    },    
    text_input:{
        flex:10,
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        borderColor:"#E6DDC4",
        borderWidth:2,
    },
    content_container:{
        flex:1,
        flexDirection:"row",
        marginVertical:5,
    },  
    btn_container:{
        alignItems:"center",
        backgroundColor: "#678983",
        padding:5,
        paddingHorizontal:20,
        margin:5,
        borderRadius:8,
        borderColor:"#E6DDC4",
        borderWidth:2,
    },
    btn_text:{
        color:"#1B2430",
        fontWeight:"bold",
        fontSize: 15,
        padding:5,
    },
    top:{
        fontSize:25,
        padding:10,
        fontWeight:"bold",
        textAlign:"center",
        borderBottomWidth:1
      },
});