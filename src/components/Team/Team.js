import React, {useState, useEffect}  from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./Team.style";
import api from '../../api.js';


const Team = ({item}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const remove_team=()=>{
    api
    .delete('team/delete/' + item._id, {
      headers: {
        Authorization: 'bearer ' + token,
      },
    })
    .then(response => {
      if (response.status == 200 && response.data.success) {
        console.log(response.data.data[0]);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
    return (
      <View style={styles.container}>
        <View style={styles.body_container}>
          <View style={styles.content_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content.substring(0, 80)}...</Text>
          </View>
        </View>
        {
          //ekibi sil(kurucu)
          userId == item.ownerId? (
            <TouchableOpacity style={styles.cancel} onPress={remove_team}>
              <Icon name="trash" color={'maroon'} size={35} />
              <Text style={styles.content}>Ekibi Sil</Text>
            </TouchableOpacity>
          ) : (
            ''
          )
        }
        <View style={styles.members_num_container}>
            <Icon name="people-sharp" size={25}></Icon>
          <Text>{item.members_num}</Text>
        </View>
      </View>
    );
}


export default Team;
