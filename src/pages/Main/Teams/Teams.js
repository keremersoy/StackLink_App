import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Styles from './Teams.style';
import {useDispatch, useSelector} from 'react-redux';
import Team from '../../../components/Team';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import {fetchTeamList} from '../../../redux/team';

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

  const filterList = (item) => {
    console.log(item);
    return(
    headerText != ''
      ? item.title.toLowerCase().includes(headerText.toLowerCase())
      : true)
  };
  const getHeaderText = text => {
    setHeaderText(text);
  };
  return (
    <View style={Styles.container}>
    <Header navigation={navigation} onChangeText={getHeaderText} type={1}/>
      <FlatList
        keyExtractor={keyExtractor}
        data={teams.list.filter(filterList).reverse()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Teams;
