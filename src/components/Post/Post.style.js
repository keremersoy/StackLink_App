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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rating_container: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  body_container: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
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
    color: '#1B2430',
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
});
