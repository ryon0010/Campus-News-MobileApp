import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BadgerNewsScreen from '../screens/BadgerNewsScreen';
import BadgerNewsDetailScreen from '../screens/BadgerNewsDetailScreen';

const NewsStack = createNativeStackNavigator();

function BadgerStack() {
  return (
      <NewsStack.Navigator>
        <NewsStack.Screen name="AllNews" component={BadgerNewsScreen} options={{title: ""}} />
        <NewsStack.Screen name="SpecificNews" component={BadgerNewsDetailScreen} options={{title: ""}}/>
      </NewsStack.Navigator>
  );
}

export default BadgerStack;