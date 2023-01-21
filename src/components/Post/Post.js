import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Post.style';
import api from '../../api.js';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {fetchQuestionList} from '../../redux/question';

const Post = ({item}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);
  const [score, setscore] = useState(item.score);

  const dispatch = useDispatch();

  const remove_question=()=>{
    api
    .delete('question/delete/' + item._id, {
      headers: {
        Authorization: 'bearer ' + token,
      },
    })
    .then(response => {
      if (response.status == 200 && response.data.success) {
        dispatch(fetchQuestionList(token))
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <View style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          {item.img ? (
            <Image style={styles.image} source={{uri: item.img}} />
          ) : null}

          <View style={styles.content_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>
              {item.content.substring(0, 80)}...
            </Text>
          </View>
        </View>
        {
          //soruyu sil(kurucu)
          userId == item.userId ? (
            <TouchableHighlight onPress={remove_question}>
            <View style={styles.cancel} >
              <Icon name="trash" color={'maroon'} size={35} />
              <Text style={styles.content}>Soruyu Sil</Text>
              </View>
            </TouchableHighlight>
          ) : (
            ''
          )
        }
        <View style={styles.rating_container}>
          <TouchableOpacity>
            <Icon name="chevron-up-outline" size={25}></Icon>
          </TouchableOpacity>
          <Text>{score}</Text>
          <TouchableOpacity>
            <Icon name="chevron-down-outline" size={25}></Icon>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.date}>{item.date.substring(0, 10)}</Text>
    </View>
  );
};

export default Post;
