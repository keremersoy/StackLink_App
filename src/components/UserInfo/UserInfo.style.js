import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin:2,
    borderWidth:1
  },
  top_info_container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor:"black"
  },
  bottom_info_container: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  txt_name:{
    fontSize:25,
    color:"#1B2430"
  },
  username_text: {
    fontSize: 16,
    color:"#1B2430"
  },
  txt_info: {
    font:14,
    margin: 3,
    color:"#1B2430"
  },
  });