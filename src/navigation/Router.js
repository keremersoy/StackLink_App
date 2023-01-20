import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import MenuRouter from './MenuRouter';
import QuestionDetailPage from '../pages/Main/QuestionDetail';
import TeamDetailPage from '../pages/Main/TeamDetail';
import EditProfilePage from '../pages/ProfilePages/EditProfile';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Menu" component={MenuRouter} />
      <Stack.Screen name='QuestionDetail' component={QuestionDetailPage}/>
      <Stack.Screen name='TeamDetail' component={TeamDetailPage}/>
      <Stack.Screen name='EditProfile' component={EditProfilePage}/>
    </Stack.Navigator>
  );
};

export default Router;
