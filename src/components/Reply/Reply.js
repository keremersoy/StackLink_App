import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Reply.style';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../api.js';
import {fetchReplyList} from '../../redux/reply';

const Reply = ({item}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);
  const [score, setscore] = useState(item.score);
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get('user/get/' + item.userId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setUserName(response.data.data[0].username);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const remove_reply=()=>{
    api
    .delete('reply/delete/' + item._id, {
      headers: {
        Authorization: 'bearer ' + token,
      },
    })
    .then(response => {
      if (response.status == 200 && response.data.success) {
        dispatch(fetchReplyList({token,id:item.parentId}));
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <View style={styles.outer_container}>
      <View style={styles.header_container}>
        <Text style={styles.username}>@{userName}</Text>
        <Text style={styles.date}>{item.date.substring(0, 10)}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <View style={styles.rating_container}>
            <TouchableOpacity>
              <Icon name="chevron-up-outline" size={20}></Icon>
            </TouchableOpacity>
            <Text>{score}</Text>
            <TouchableOpacity>
              <Icon name="chevron-down-outline" size={20}></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.content_container}>
            <Text style={styles.content}>{item.content}</Text>
          </View>
          {
          //ekibi sil(kurucu)
          userId == item.userId? (
            <TouchableOpacity style={styles.cancel} onPress={remove_reply}>
              <Icon name="trash" color={'maroon'} size={35} />
              <Text style={styles.content}>Cevabı Sil</Text>
            </TouchableOpacity>
          ) : (
            ''
          )
        }
        </View>
      </View>
    </View>
  );
};

export default Reply;
