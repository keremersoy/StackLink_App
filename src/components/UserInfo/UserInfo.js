import React, {useState} from 'react';
import {Text, View, Linking, TouchableOpacity, Image,ToastAndroid} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './UserInfo.style';
import Icon from 'react-native-vector-icons/Ionicons';

const UserInfo = ({user}) => {
  const handlePress = async () => {
    const link = 'https://github.com/' + user?.github;
    await Linking.openURL(link).catch(err =>
      console.error("Couldn't load", err),
    );
  };
  const copyToClipboard = () => {
    Clipboard.setString(user?.email);
    ToastAndroid.show('Mail kopyalandı.', ToastAndroid.SHORT);
  };
  //TODO:fotoğraf işlemleri
  return (
    <View style={styles.container}>
      <View style={styles.top_info_container}>
        <Image style={styles.image} />
        <View style={styles.info_container}>
          <Text style={styles.txt_name}>{user?.name}</Text>
          <Text style={styles.username_text}>@{user?.username}</Text>
          <TouchableOpacity
            style={styles.email_container}
            onPress={copyToClipboard}>
            <Text style={styles.txt_info}>EMAİL: {user?.email}</Text>
            <Icon name="copy-outline" size={20} />
          </TouchableOpacity>
          {user?.github != '' ? (
            <TouchableOpacity
              style={styles.email_container}
              onPress={handlePress}>
              <Text style={styles.txt_info}>GİTHUB: {user?.github} </Text>
              <Icon name="open-outline" size={20} />
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
