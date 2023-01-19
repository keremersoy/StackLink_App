import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Member.style';
import api from '../../api';

const Reply = ({item, ownerId,teamId}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get('user/get/' + item.userId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setUser(response.data.data[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  const join=()=>{
    api
    .put('team/member/join',{user_id:item.userId,team_id:teamId}, {
      headers: {
        Authorization: 'bearer ' + token,
      },
    })
    .then(response => {
      if (response.status == 200 && response.data.success) {
        const member=response.data.data[0]
        console.log(member);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  const kick_out=()=>{
    api
      .put('team/member/remove',{user_id:item.userId,team_id:teamId}, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          const member=response.data.data[0]
          console.log(member);
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
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.username}>@{user?.username}</Text>
        </View>

        {(item.status == '0')&&(userId!=ownerId) ? (
          <View style={styles.lead}>
            <Icon
              name="information-circle-outline"
              color={'gray'}
              size={35}
            />
            <Text style={styles.info_text}>Beklemede</Text>
          </View>
        ) : (
          ''
        )}

        {
          //ayrıl butonu
          userId == item.userId && !(userId == ownerId) ? (
            <TouchableOpacity style={styles.cancel} onPress={kick_out}>
              <Icon name="close-circle" color={'darkred'} size={35} />
              <Text style={styles.info_text}>Ayrıl</Text>
            </TouchableOpacity>
          ) : (
            ''
          )
        }
        {
          //istek butonları
          userId == ownerId && item.status == '0' ? (
            <View>
              <TouchableOpacity onPress={join}>
                <Icon name="checkmark-circle" color={'darkgreen'} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={kick_out}>
                <Icon name="close-circle" color={'darkred'} size={25} />
              </TouchableOpacity>
            </View>
          ) : (
            ''
          )
        }
        {
          //kurucu kişinin belirteci
          item.status == '2' ? (
            <View style={styles.lead}>
              <Icon name="caret-forward-sharp" color={'gray'} size={35} />
              <Text style={styles.info_text}>Kurucu</Text>
            </View>
          ) : (
            ''
          )
        }
        {
          //kişiyi çıkart(kurucu)
          (userId == ownerId) && (item.status != '2') && (item.status != '0')? (
            <TouchableOpacity style={styles.cancel} onPress={kick_out}>
              <Icon name="close-circle" color={'maroon'} size={35} />
              <Text style={styles.info_text}>Kişiyi Çıkart</Text>
            </TouchableOpacity>
          ) : (
            ''
          )
        }
      </View>
    </View>
  );
};

export default Reply;
