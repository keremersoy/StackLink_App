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
  question_container: {
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
  answer_container: {
    flex: 1,
    marginHorizontal:3,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  answer_title_container: {
    backgroundColor: '#D1D1D1',
    borderRadius: 5,
    borderWidth: 1,
  },
  answer_title: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    color: '#1B2430',
  },
  reply_container: {
    backgroundColor: 'white',
  },
  send_reply_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  input_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 5,
  },
  text_input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#E6DDC4',
    borderWidth: 2,
  },
  btn_send: {
    marginLeft:5,
    backgroundColor: '#678983',
    padding: 10,
    borderRadius:15,
  },
});
