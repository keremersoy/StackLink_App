import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/Main/Home';
import PostPage from './PostRouter';
import TeamsPage from '../pages/Main/Teams';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const postName = 'Post';
const teamsName = 'Teams';

const MainRouter = () => {
  return (
    <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused?'home':'home-outline';
          }else if (rn === postName) {
            iconName = focused?'add-circle-outline':'add-outline';
          }else if (rn === teamsName) {
            iconName = focused?'people':'people-outline';
          }
          return (<Icon name={iconName} size={30} color={color}/>)
        },
        
        tabBarActiveTintColor: '#395B64',
        tabBarInactiveTintColor: '#E6DDC4',
        headerShown:false
      })}

      >
      <Tab.Screen name={homeName} component={HomePage}/>
      <Tab.Screen name={postName} component={PostPage} />
      <Tab.Screen name={teamsName} component={TeamsPage} />
    </Tab.Navigator>
  );
};

export default MainRouter;
