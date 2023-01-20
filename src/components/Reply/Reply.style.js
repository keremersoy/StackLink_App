import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  outer_container: {
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
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  rating_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  body_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  content_container: {
    flex: 1,
    marginHorizontal: 10,
  },

  image: {
    width: 100,
    height: 100,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  content: {
    color: '#1B2430',
  },
  cancel: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginRight:10,
  },
  header_container: {
    flexDirection: 'row',
  },
  username:{
    textAlign: 'left',
    fontWeight:"bold",
    fontSize:16,
    borderColor:"#c0c0c0",
    borderBottomWidth:1,
    paddingHorizontal:5,
  },
  date: {
    flex:1,
    textAlign: 'right',
  },
});
