import React, {useState, useEffect} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Profile.Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import Post from '../../../components/Post';
import Team from '../../../components/Team';
import Header from '../../../components/Header';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {fetchQuestionList} from '../../../redux/question';
import {fetchTeamList} from '../../../redux/team';
import {fetchUserData} from '../../../redux/user';
import api from '../../../api';

const Profile = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const questions = useSelector(state => state.question.questions);
  const teams = useSelector(state => state.team.teams);
  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [listName, setListName] = useState('Sorular');
  const [teamsList, setTeamsList] = useState([]);

  const getQuestions = () => {
    dispatch(fetchQuestionList(token));
    setList(questions.list.filter(q => q.userId == user.data[0]?._id));
    setListName('Sorular');
  };
  const getTeams = () => {
    dispatch(fetchTeamList(token));
    setList(teams.list.filter(t => teamsList.some(tm=>tm.teamId==t._id)));
    setListName('Ekipler');
  };
  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);

  useEffect(() => {
    getQuestions();
  }, [user]);
  useEffect(() => {
    if (listName == 'Sorular') {
      setList(questions.list.filter(q => q.userId == user.data[0]?._id));
    } else {
      api
        .get('team/get/teamsForUser', {
          headers: {
            Authorization: 'bearer ' + token,
          },
        })
        .then(response => {
          if (response.status == 200 && response.data.success) {
            setTeamsList(response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [questions, teams]);

  useEffect(() => {
    setList(teams.list.filter(t => teamsList.some(tm=>tm.teamId==t._id)));
  }, [teamsList]);

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };

  const renderItem = ({item}) => {
    return listName == 'Sorular' ? (
      <TouchableHighlight
        onPress={() => navigation.navigate('QuestionDetail', {question: item})}>
        <Post item={item} />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        onPress={() => navigation.navigate('TeamDetail', {team: item})}>
        <Team item={item} />
      </TouchableHighlight>
    );
  };

  const handlePress = async () => {
    const link = 'https://github.com/' + user?.data[0]?.github;
    await Linking.openURL(link).catch(err =>
      console.error("Couldn't load", err),
    );
  };

  const goToEditPage = () => {
    navigation.navigate('EditProfile', {user: user.data[0]});
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} type={0} />
      <View style={styles.info_container}>
        <View style={styles.top_info_container}>
          <Image style={styles.image} />
          <View style={styles.username_container}>
            <Text style={styles.username_text}>{user?.data[0]?.username}</Text>
            <TouchableOpacity
              style={styles.btn_edit_container}
              onPress={goToEditPage}>
              <Text style={styles.btn_edit_text}>Profili Düzenle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.info_container}>
          <View style={styles.bottom_info_container}>
            <Text style={styles.txt_name}>{user?.data[0]?.name}</Text>
            <Text style={styles.txt_info}>EMAİL: {user?.data[0]?.email}</Text>
            {user?.data[0]?.github != '' ? (
              <TouchableOpacity
                style={styles.github_container}
                onPress={handlePress}>
                <Text style={styles.txt_info}>
                  GİTHUB: {user?.data[0]?.github}
                </Text>
                <Icon name="open-outline" size={20} />
              </TouchableOpacity>
            ) : (
              ''
            )}
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
