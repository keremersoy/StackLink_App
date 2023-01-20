import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Reply.style';

const Reply = ({item}) => {
  const [score, setscore] = useState(item.score);

  return (
    <View style={styles.outer_container}>
      <View style={styles.container}>
        <Text style={styles.date}>{item.date.substring(0, 10)}</Text>
        <View style={styles.body_container}>
          <View style={styles.rating_container}>
            <TouchableOpacity>
              <Icon name="chevron-up-outline" size={20}></Icon>
            </TouchableOpacity>
            <Text>{score}</Text>
            <TouchableOpacity>
              <Icon name="chevron-down-outline" size={20}></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.content_container}>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Reply;
