import React,{useState,useEffect} from 'react';
import {View,FlatList} from 'react-native';
import Styles from "./Teams.style";
import api from '../../../api.js';
import {useDispatch, useSelector} from 'react-redux';
import Team from "../../../components/Team"

const Teams = () => {
    const token = useSelector(state => state.user.token);
    const [teamList, setTeamList] = useState([]);
    const keyExtractor = (item, index) => {
      return item._id || index * Math.random()
    }
    useEffect(() => {
      api
        .get('/team/get', {
          headers: {
            Authorization: 'bearer ' + token,
          },
        })
        .then(response => {
          if (response.status == 200 && response.data.success) {
              setTeamList(response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    const renderItem = ({item}) => {
      return <Team  item={item}/>
    }
    return (
      <View style={Styles.container}>
        <FlatList keyExtractor={keyExtractor} data={teamList.reverse()} renderItem={renderItem} />
      </View>
    );
}


export default Teams;
