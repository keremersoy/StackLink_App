import React, {useState, useEffect} from 'react';
import {View,Text, FlatList} from 'react-native';
import Styles from './Teams.style';
import {useDispatch, useSelector} from 'react-redux';
import Team from '../../../components/Team';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import {fetchTeamList} from '../../../redux/team';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import Icon from 'react-native-vector-icons/Ionicons';

const Teams = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const teams = useSelector(state => state.team.teams);

  const dispatch = useDispatch();

  const [headerText, setHeaderText] = useState('');

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };
  useEffect(() => {
    dispatch(fetchTeamList(token));
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('TeamDetail', {team: item})}>
        <Team item={item} />
      </TouchableHighlight>
    );
  };

  const filterList = item => {
    return headerText != ''
      ? item.title.toLowerCase().includes(headerText.toLowerCase())
      : true;
  };
  const getHeaderText = text => {
    setHeaderText(text);
  };
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} onChangeText={getHeaderText} type={1} />
      <View style={Styles.tab_title_container}>
          <Text style={Styles.tab_title_text}>Ekipler</Text>
      </View>
      {teams.Loading && <Loading type="question" />}
      {!teams.Loading && !teams.Error ? (
        teams.list.length == 0 ? (
          <View style={{flex:1,justifyContent:"center"}}>
            <Icon
              style={Styles.icon}
              name="file-tray-outline"
              color={'gray'}
              size={100}
            />
          </View>
        ) : (
          <FlatList
            keyExtractor={keyExtractor}
            data={teams.list.filter(filterList).reverse()}
            renderItem={renderItem}
          />
        )
      ) : (
        <Error />
      )}
    </View>
  );
};

export default Teams;
