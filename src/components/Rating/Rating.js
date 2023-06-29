import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Rating.style';
import api from '../../api';

const Rating = ({score, replyId}) => {
  const [vote, setVote] = useState(0);
  const [tempScore, setTempScore] = useState(score);
  const [isClick, setIsClick] = useState(false);

  const token = useSelector(state => state.user.token);
  useEffect(() => {
    api
      .get('/reply/get/user/vote/' + replyId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          console.log('-----------\nkullanıcı oyu:', response.data.data);
          setVote(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
    api
      .get('/reply/get/rating/' + replyId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          console.log('toplam:', response.data.data);
          setTempScore(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const add_vote = () => {
    console.log('vote', vote);
    api
      .post(
        'reply/add/user/vote/' + replyId,
        {vote: vote},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200 && response.data.success) {
          console.log('kayıt:', response.data.data.vote);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isClick) add_vote();
  }, [vote]);

  return (
    <View style={styles.rating_container}>
      {vote == 1 ? (
        <TouchableOpacity
          onPress={() => {
            setVote(0);
            setTempScore(tempScore - 1);
            setIsClick(true);
          }}>
          <Icon name="arrow-up-circle" size={25}></Icon>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (vote == -1) setTempScore(tempScore + 2);
            else setTempScore(tempScore + 1);
            setVote(+1);
            setIsClick(true);
          }}>
          <Icon name="arrow-up-circle-outline" size={25}></Icon>
        </TouchableOpacity>
      )}
      <Text>{tempScore}</Text>
      {vote == -1 ? (
        <TouchableOpacity
          onPress={() => {
            setVote(0);
            setTempScore(tempScore + 1);
            setIsClick(true);
          }}>
          <Icon name="arrow-down-circle" size={25}></Icon>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (vote == 1) setTempScore(tempScore - 2);
            else setTempScore(tempScore - 1);
            setVote(-1);
            setIsClick(true);
          }}>
          <Icon name="arrow-down-circle-outline" size={25}></Icon>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Rating;
