import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BadgerNewsScreen from '../screens/BadgerNewsScreen'
import BadgerPreferenceScreen from '../screens/BadgerPreferencesScreen'
import BadgerStack from './BadgerStack'

const BadgerSocialTabs = createBottomTabNavigator();

function BadgerTabs(props) {
    return (
        <BadgerSocialTabs.Navigator screenOptions={{headerStyle: {backgroundColor: "lightgrey"}, headerTitleStyle: {fontSize: 20}}}>
            <BadgerSocialTabs.Screen name="BadgerStack" component={BadgerStack} options={{title: "News"}}/>
            <BadgerSocialTabs.Screen name="Preferences" component={BadgerPreferenceScreen} />
        </BadgerSocialTabs.Navigator>
      );
}

export default BadgerTabs;