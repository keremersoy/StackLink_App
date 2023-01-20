import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import questionPage from '../pages/Main/AddQuestion/AddQuestion';
import teamPage from '../pages/Main/AddTeam/AddTeam';

const Tab = createMaterialTopTabNavigator();

const PostRouter=() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Soru" component={questionPage} />
      <Tab.Screen name="Ekip" component={teamPage} />
    </Tab.Navigator>
  );S
}

export default PostRouter;