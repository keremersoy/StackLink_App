import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import styles from './Drawer.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"white"}}>
        <View style={styles.item_list_container}> 
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>
      <View style={styles.item_container}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:5}}>
          <View style={styles.item}>
            <Icon name="log-out" size={30}/>
            <Text>Çıkış yap</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drawer;
