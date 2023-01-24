import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item_list_container: {
    flex:1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  item_container:{
    padding:20,
    borderTopWidth:1,
    borderTopColor:"#ccc"
  },
  item:{
    flexDirection:"row",
    alignItems:"center"
  }
});
