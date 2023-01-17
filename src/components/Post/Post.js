import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Post.style';

const Post = ({item}) => {
  const [score, setscore] = useState(item.score);
  return (
    <View style={styles.outer_container}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          {item.img ? (
            <Image style={styles.image} source={{uri: item.img}} />
          ) : null}

          <View style={styles.content_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>
              {item.content.substring(0, 80)}...
            </Text>
          </View>
        </View>
        <View style={styles.rating_container}>
          <TouchableOpacity>
            <Icon name="chevron-up-outline" size={25}></Icon>
          </TouchableOpacity>
          <Text>{score}</Text>
          <TouchableOpacity>
            <Icon name="chevron-down-outline" size={25}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.date}>{item.date.substring(0, 10)}</Text>
    </View>
  );
};

export default Post;
