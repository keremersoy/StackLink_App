import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E9D2',
  },
  body_container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    marginBottom:80
  },
  text_input_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: '#1B2430',
    fontWeight: 'bold',
  },
  text_input: {
    flex: 4,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#E6DDC4',
    borderWidth: 2,
  },
  image: {
    borderRadius: 100,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
  },
  btns_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight:15,
    marginTop:5,
  },
  btn_save_container: {
    alignItems: 'center',
    backgroundColor: '#678983',
    padding: 5,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    borderColor: '#E6DDC4',
    borderWidth: 2,
  },
  btn_cancel_container: {
    alignItems: 'center',
    backgroundColor: '#a0a0a0',
    padding: 5,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    borderColor: '#E6DDC4',
    borderWidth: 2,
  },
  btn_text: {
    color: '#1B2430',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
});
