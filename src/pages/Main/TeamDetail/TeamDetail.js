import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Style from './TeamDetail.style';
import api from '../../../api.js';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Member from '../../../components/Member';
import {fetchMemberList} from '../../../redux/member';
import Header from '../../../components/Header';
import UserInfo from '../../../components/UserInfo';

const TeamDetail = props => {
  const {team} = props.route.params;
  const {navigation} = props;

  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);
  const persons = useSelector(state => state.member.members);

  const dispatch = useDispatch();

  const [title, setTitle] = useState(team.title);
  const [content, setContent] = useState(team.content);
  const [members, setMembers] = useState(persons?.list.filter(m=>m.status>0).length);

  const [isShowInfo, setIsShowInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState('');

  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(team.ownerId == userId);

  const filterPersons = person => {
    if (userId == team.ownerId) return person.status > '-1';
    if (userId == person.userId && person.status != '-1') return true;
    return person.status > '0';
  };
  useEffect(() => {
    setTitle(team.title);
    setContent(team.content);

    dispatch(fetchMemberList({token, id: team._id}));
  }, []);

  useEffect(() => {
    setIsMember(persons.list.some(person => person.userId == userId));
    setMembers(persons.list.filter(m=>m.status>0).length);
  }, [persons]);

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };

  const getUserInfo = selected => {
    setSelectedUserId(selected.userId);
    setIsShowInfo(!isShowInfo);
  };
  useEffect(() => {
    api
      .get('user/get/' + selectedUserId, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setSelectedUser(response.data.data[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [selectedUserId]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => getUserInfo(item)}>
        <View>
          <Member item={item} ownerId={team.ownerId} teamId={team._id} />
        </View>
      </TouchableOpacity>
    );
  };

  const click_join = () => {
    if (!isMember || !isOwner) {
      api
        .post(
          'team/member/request',
          {team_id: team._id},
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          },
        )
        .then(response => {
          if (response.status == 200 && response.data.success) {
            dispatch(fetchMemberList({token, id: team._id}));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={Style.container}>
      <Header navigation={navigation} type={0} />
      <View style={Style.inner_container}>
        <View style={Style.team_container}>
          <View style={Style.title_container}>
            <Text style={Style.title}>{title}</Text>
          </View>
          <View style={Style.content_container}>
            <Text style={Style.content}>{content}</Text>
          </View>
        </View>
        <View style={Style.persons_container}>
          <View style={Style.persons_title_container}>
            <Text style={Style.persons_title}>Kişiler</Text>
            <Text style={Style.persons_title}>{members}</Text>
          </View>
          <FlatList
            style={Style.reply_container}
            keyExtractor={keyExtractor}
            data={persons.list.filter(filterPersons)}
            renderItem={renderItem}
          />
          {isOwner || isMember ? (
            ''
          ) : (
            <TouchableOpacity style={Style.btn_join} onPress={click_join}>
              <Icon name="add" size={35}></Icon>
              <Text style={Style.persons_title}>Katıl</Text>
            </TouchableOpacity>
          )}
        </View>
        {isShowInfo && <UserInfo user={selectedUser} />}
      </View>
    </View>
  );
};

export default TeamDetail;
