import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./Team.style";

const Team = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.body_container}>
          <View style={styles.content_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content.substring(0, 80)}...</Text>
          </View>
        </View>
        <View style={styles.members_num_container}>
            <Icon name="people-sharp" size={25}></Icon>
          <Text>{item.members_num}</Text>
        </View>
      </View>
    );
}


export default Team;
