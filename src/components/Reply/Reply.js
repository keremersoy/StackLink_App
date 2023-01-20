import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Reply.style';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../api.js';

const Reply = ({item}) => {
  const token = useSelector(state => state.user.token);
  const [score, setscore] = useState(item.score);
  const [userName, setUserName] = useState('');
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
        </View>
      </View>
    </View>
  );
};

export default Reply;
