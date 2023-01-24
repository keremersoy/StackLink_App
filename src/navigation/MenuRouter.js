import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainRouter from './MainRouter';
import Login from '../pages/Auth/Login';
import Profile from '../pages/ProfilePages/Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Main"
        component={MainRouter}
        options={{drawerIcon: ({color}) => <Icon name="home" size={30} />}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{drawerIcon: ({color}) => <Icon name="person" size={30} />}}
      />
      <Drawer.Screen
        name="Log out"
        component={Login}
        options={{drawerIcon: ({color}) => <Icon name="log-out" size={30} />}}
      />
    </Drawer.Navigator>
  );
};

export default MenuRouter;
