import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E9D2',
  },
  info_container: {
    borderBottomWidth: 1,
  },
  top_info_container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth:1,
    borderColor:"black"
  },
  bottom_info_container: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  username_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  username_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"#1B2430"
  },
  txt_info: {
    font:14,
    margin: 3,
    color:"#1B2430"
  },
  txt_name:{
    font:16,
    marginHorizontal: 3,
    fontWeight:"bold",
    color:"#1B2430"
  },
  btn_edit_container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#678983',
  },
  btn_edit_text: {
    fontSize: 15,
    color:"#1B2430"
  },
  tabs_title_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:"#b0b0b0",
    borderBottomWidth:1,
  },
  tabs_title_text:{
    fontWeight:"bold",
    padding:5,
    color:"#1B2430",
    textAlign:"center"
  },
  title_container: {
    alignItems: 'center',
  },
  title_text:{
    fontWeight:"bold",
    color:"#1B2430",
    textAlign:"center",
    borderBottomWidth:1,
  },
  list_container:{
    justifyContent:"center",
    flex:1
  },
  tabs_btn:{
    flex:1,
    borderLeftWidth:1,
    borderRightWidth:1,
  },
  github_container:{
    flexDirection:"row",
  }
});
