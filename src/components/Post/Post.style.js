import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:5,
        padding:14,
        flexDirection:"row",
        backgroundColor:"#F1F1F1",
        justifyContent:"center",
        alignItems:"center"
    },

    rating_container:{
        margin:0,
        justifyContent:"center",
        alignItems:"center",
    },

    body_container:{
        flexDirection:"row",
        padding:10,
        flex: 1,
        justifyContent:"flex-start",
        alignItems:"center"
    },

    content_container:{
        flex:1,
        marginHorizontal:10,
    },

    image:{
        width:100,
        height:100,
    },
    
    title:{
        fontWeight:"bold",
        fontSize:20,
    },
    
    content:{
        
    }
});