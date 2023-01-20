import {StyleSheet, Dimensions} from 'react-native';
const deviceDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E9D2',
  },
  inner_container: {
    flex: 1,
    margin: 8,
  },
  team_container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
  },
  image: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: 'gray',
    width: deviceDimensions.width - 30,
    height: deviceDimensions.height / 3,
  },
  content_container: {
    marginVertical: 5,
  },
  btn_text: {
    color: '#1B2430',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  title: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    color: '#1B2430',
  },
  content: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    color: '#1B2430',
  },
  persons_container: {
    flex: 1,
    marginHorizontal: 3,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  persons_title_container: {
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor: '#D1D1D1',
    borderTopStartRadius:5,
    borderTopEndRadius:5,
    borderBottomWidth:1,
  },
  persons_title: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    color: 'black',
  },
  reply_container: {
    backgroundColor: 'white',
    
  },
  btn_join: {
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    borderTopWidth:0.5,
    borderTopColor:'#a0a0a0',
  },
});
