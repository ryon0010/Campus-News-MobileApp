import { ScrollView, Text, View } from "react-native";
import { useState, useEffect, useContext } from 'react';
import BadgerNewsItem from '../BadgerNewsItem';
import CS571 from '@cs571/mobile-client';
import BadgerNewsContext from '../BadgerNewsContext';

function BadgerNewsScreen(props) {

    const [badgerNews, setBadgerNews] = useState([]);
    const [prefs, setPrefs] = useContext(BadgerNewsContext);

    useEffect(() => {
    fetch("https://cs571.org/api/f23/hw8/articles", {
        headers: {
            "X-CS571-ID": CS571.getBadgerId()
        }
    })
    .then(res => res.json())
    .then(data => 
        setBadgerNews(data));
    }, []);    


    const isPrefs =  Object.keys(prefs).filter(key => prefs[key]);
    const filteredNews = badgerNews.filter((news) => {
        return news.tags.some((tag) => isPrefs.includes(tag));
    });

    if (filteredNews.length === 0) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20,  padding: 20}}>There are no news that fit your preferences</Text>
        </View>
    }

    return<ScrollView>
        {
            filteredNews.map((news) => {
                return <BadgerNewsItem key={news.id} {...news}/>
            })
        }
    </ScrollView>
}

export default BadgerNewsScreen;