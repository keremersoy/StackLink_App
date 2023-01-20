import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#F1F1F1',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },

  body_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  content_container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'flex-start',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  cancel:{
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    paddingHorizontal:2,
    borderRadius:5
  }
  ,
  info_text:{
    color:"black",
    fontWeight:"bold"
  },
  lead:{
    flexDirection:"row",
    alignItems:"center"
  }
  ,
  username: {
    fontSize: 14,
    color: 'gray',},
  date: {
    textAlign: 'right',
  },
});
