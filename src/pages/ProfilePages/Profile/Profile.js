import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './Profile.Style';
import api from '../../../api';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import Post from '../../../components/Post';
import Team from '../../../components/Team';
import Header from '../../../components/Header';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [listName, setListName] = useState('Sorular');

  const getQuestions = () => {
    api
      .get('/user/get/questions/' + userId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setList(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
    setListName('Sorular');
  };
  const getTeams = () => {
    api
      .get('/user/get/teams/' + userId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setList(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
    setListName('Ekipler');
  };
  useEffect(() => {
    api
      .get('user/get/' + userId, {
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
  useEffect(() => {
    getQuestions();
  }, [user]);

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };

  const renderItem = ({item}) => {
    return listName == 'Sorular' ? (
      <TouchableHighlight onPress={()=>navigation.navigate('QuestionDetail', {question: item})}>
        <Post item={item} />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight onPress={()=>navigation.navigate('TeamDetail', {team: item})}>
        <Team item={item} />
      </TouchableHighlight>
    );
  };

  const goToEditPage = () => {
    navigation.navigate("EditProfile",{user:user});
  };
  return (
    <View style={styles.container}>
    <Header navigation={navigation} type={0}/>
      <View style={styles.info_container}>
        <View style={styles.top_info_container}>
          <Image style={styles.image} />
          <View style={styles.username_container}>
            <Text style={styles.username_text}>{user?.username}</Text>
            <TouchableOpacity
              style={styles.btn_edit_container}
              onPress={goToEditPage}>
              <Text style={styles.btn_edit_text}>Profili Düzenle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.info_container}>
          <View style={styles.bottom_info_container}>
            <Text style={styles.txt_name}>{user?.name}</Text>
            <Text style={styles.txt_info}>EMAİL: {user?.email}</Text>
            {user?.github!=""?
            <Text style={styles.txt_info}>GİTHUB: </Text>:
            ""}
          </View>
        </View>
      </View>

      <View style={styles.tabs_title_container}>
        <TouchableOpacity style={styles.tabs_btn} onPress={getQuestions}>
          <Text style={styles.tabs_title_text}>Sorular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs_btn} onPress={getTeams}>
          <Text style={styles.tabs_title_text}>Ekipler</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>{listName}</Text>
        </View>
        {list.length == 0 ? (
          <Icon
            style={styles.tabs_title_text}
            name="file-tray-outline"
            color={'gray'}
            size={100}
          />
        ) : (
          <FlatList
            keyExtractor={keyExtractor}
            data={list.reverse()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};
export default Profile;
