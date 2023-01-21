import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './UserInfo.style';
import Icon from 'react-native-vector-icons/Ionicons';

const UserInfo = ({user}) => {
  //TODO:fotoğraf işlemleri
  return (
    <View style={styles.container}>
      <View style={styles.top_info_container}>
        <Image style={styles.image} />
        <View style={styles.info_container}>
          <Text style={styles.txt_name}>{user?.name}</Text>
          <Text style={styles.username_text}>@{user?.username}</Text>
          <Text style={styles.txt_info}>EMAİL: {user?.email}</Text>
          {user?.github != '' ? (
            <Text style={styles.txt_info}>GİTHUB: {user?.github} </Text>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
