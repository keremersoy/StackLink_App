import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Header.style';
import api from '../../api';

const Header = ({navigation, type,onChangeText}) => {
  const menu_toggle = () => {
    navigation.toggleDrawer();
  };
  const btn_back_click=()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      {type == 1 ? (
        <TouchableOpacity style={styles.inner_container} onPress={menu_toggle}>
          <Icon name="menu" color={'#1B2430'} size={35} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.inner_container} onPress={btn_back_click}>
          <Icon name="chevron-back" color={'#1B2430'} size={35} />
        </TouchableOpacity>
      )}
      {type == 1 ? <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Ara..." /> : ''}
    </View>
  );
};

export default Header;
