import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Team.style';
import api from '../../api.js';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {fetchTeamList} from '../../redux/team';

const Team = ({item}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const [userName, setUserName] = useState('');

  useEffect(() => {
    api
      .get('/user/get/' + item.ownerId, {
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

  const dispatch = useDispatch();
  const remove_team = () => {
    api
      .delete('team/delete/' + item._id, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          dispatch(fetchTeamList(token));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <View style={styles.content_container}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      <Text style={styles.username}>@{userName}</Text>
      </View>
      {
        //ekibi sil(kurucu)
        userId == item.ownerId ? (
          <TouchableHighlight onPress={remove_team}>
            <View style={styles.cancel}>
              <Icon name="trash" color={'maroon'} size={35} />
              <Text style={styles.content}>Ekibi Sil</Text>
            </View>
          </TouchableHighlight>
        ) : (
          ''
        )
      }
      <View style={styles.members_num_container}>
        <Icon name="people-sharp" size={25}></Icon>
        {
          //<Text>{item.members_num}</Text>
        }
      </View>
    </View>
  );
};

export default Team;
