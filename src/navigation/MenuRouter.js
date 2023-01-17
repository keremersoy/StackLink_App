import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainRouter from './MainRouter';
import Login from '../pages/Auth/Login';

const Drawer = createDrawerNavigator();

const MenuRouter = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Main" component={MainRouter}/>
      <Drawer.Screen name="Log out" component={Login} />
    </Drawer.Navigator>
  );
};

export default MenuRouter;
