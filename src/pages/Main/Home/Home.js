import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Styles from './Home.style.js';
import Post from '../../../components/Post';
import Header from '../../../components/Header';
import api from '../../../api.js';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const [questionList, setQuestionList] = useState([]);

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };
  useEffect(() => {
    api
      .get('/question/get', {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setQuestionList(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight onPress={()=>navigation.navigate("QuestionDetail",{question:item})}>
        <Post item={item} />
      </TouchableHighlight>
    );
  };
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} type={1}/>
      <FlatList
        keyExtractor={keyExtractor}
        data={questionList.reverse()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
