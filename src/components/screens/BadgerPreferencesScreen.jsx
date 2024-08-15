import { Text, View, Switch, Alert} from "react-native";
import {Card} from 'react-native-paper';
import { useState, useEffect, useContext } from 'react';
import BadgerNewsContext from '../BadgerNewsContext';

function BadgerPreferencesScreen(props) {
    const [prefs, setPrefs] = useContext(BadgerNewsContext);
    const prefKeys = Object.keys(prefs);

    const handleToggle = (pref) => {
        setPrefs({ ...prefs, [pref] : !prefs[pref] });
    }

    return (
        <View>
            {prefKeys.map(pref => (
                <Card key={pref} style={{marginTop: 10, marginLeft: 10, marginRight: 10, padding: 50}}>
                    <Text style={{textAlign: "center", marginBottom: 10}}>{pref}</Text>
                    <Switch style={{alignSelf: 'center'}} value={prefs[pref]} onValueChange={() => handleToggle(pref)} />
                </Card>
            ))}
        </View>
    );
}

export default BadgerPreferencesScreen;