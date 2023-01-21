import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import Styles from './Home.style.js';
import Post from '../../../components/Post';
import Header from '../../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {fetchQuestionList} from '../../../redux/question';

const Home = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const questions = useSelector(state => state.question.questions);
  const dispatch = useDispatch();

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
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} type={1} />
      <FlatList
        keyExtractor={keyExtractor}
        data={questions.list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
