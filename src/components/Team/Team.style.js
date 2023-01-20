import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 14,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },

  members_num_container: {
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
