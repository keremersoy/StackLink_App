import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Styles from './Home.style.js';
import Post from '../../../components/Post';
import Header from '../../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {fetchQuestionList} from '../../../redux/question';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const questions = useSelector(state => state.question.questions);
  const dispatch = useDispatch();

  const [headerText, setHeaderText] = useState('');

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };
  useEffect(() => {
    dispatch(fetchQuestionList(token));
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('QuestionDetail', {question: item})}>
        <Post item={item} />
      </TouchableHighlight>
    );
  };

  const filterList = item => {
    return headerText != ''
      ? item.title.toLowerCase().includes(headerText.toLowerCase()) ||
          item.content.toLowerCase().includes(headerText.toLowerCase())
      : true;
  };
  const getHeaderText = text => {
    setHeaderText(text);
  };
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} onChangeText={getHeaderText} type={1} />
      <View style={Styles.tab_title_container}>
          <Text style={Styles.tab_title_text}>Sorular</Text>
      </View>
      {questions.Loading && <Loading type="question" />}
      {!questions.Loading && !questions.Error ? (
        questions.list.length == 0 ? (
          <View style={{flex:1,justifyContent:"center"}}>
            <Icon
              style={Styles.icon}
              name="file-tray-outline"
              color={'gray'}
              size={100}
            />
          </View>
        ) : (
          <FlatList
            keyExtractor={keyExtractor}
            data={questions.list.filter(filterList).reverse()}
            renderItem={renderItem}
          />
        )
      ) : (
        <Error />
      )}
    </View>
  );
};

export default Home;
