import { StyleSheet } from "react-native";

export default StyleSheet.create({
    outer_container:{
        marginHorizontal:10,
        marginVertical:5,
        backgroundColor:"#F1F1F1",
        padding:14,
        justifyContent:"center",
        alignItems:"flex-end",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#D1D1D1"
    },
    container:{
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },

    rating_container:{
        alignItems:"center",
        justifyContent:"center",
    },

    body_container:{
        flexDirection:"row",
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
        
    },
    date:{
        textAlign:"right"
    }
});