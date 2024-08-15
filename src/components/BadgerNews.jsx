import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import BadgerNewsContext from './BadgerNewsContext';
import BadgerTabs from './navigation/BadgerTabs';
import CS571 from '@cs571/mobile-client';

export default function BadgerNews(props) {
  const [prefs, setPrefs] = useState({});

  useEffect(() => {
    fetch("https://cs571.org/api/f23/hw8/articles", {
        headers: {
            "X-CS571-ID": CS571.getBadgerId()
        }
    })
    .then(res => res.json())
    .then(data => {
      const uniqueTags = [...new Set(data.flatMap(item => item.tags))];
      const tagObj = {};
      uniqueTags.forEach(tag => {
        tagObj[tag] = true;
      });
      setPrefs(tagObj);
    });    
  }, []);    
 
  return (
    <BadgerNewsContext.Provider value={[prefs, setPrefs]}>
      <NavigationContainer>
        <BadgerTabs options={{ headerShown: false }}/>
      </NavigationContainer>
    </BadgerNewsContext.Provider>
  );
}