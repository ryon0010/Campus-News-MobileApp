import {View, Text, Image, Linking, Animated, ScrollView} from 'react-native'
import { useRef, useState, useEffect } from 'react';
import CS571 from '@cs571/mobile-client';

function BadgerNewsDetailScreen(props) {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fadeRef = useRef(new Animated.Value(0));

  useEffect(() => {
    fetch(`https://cs571.org/api/f23/hw8/article?id=${props.route.params.fullArticleId}`, {
        headers: {
            "X-CS571-ID": CS571.getBadgerId()
        }
    })
    .then(res => res.json())
    .then(data => {
        setDetails(data);
        setIsLoading(false);
    })
    .then(() => {
        Animated.timing(fadeRef.current, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true
        }).start();
    });
  }, []); 
  
  return (
    <ScrollView>
      <Image
        source={{uri: `https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/${props.route.params.img}`}}
        style={{width: '100%', height: 250 , marginBottom: 10}} />
      <View style= {{padding: 15}}>
        <Text style={{fontSize:27 , marginBottom: 20}}>{props.route.params.title}</Text>
        {
          isLoading ? <Text>Please wait while your article loads...</Text> :
          <Animated.View style={{ opacity: fadeRef.current }}>
          <Text style={{ fontSize: 20 ,paddingBottom: 10}}>By {details.author} on {details.posted}</Text>
          <Text style={{ color: 'blue', paddingBottom: 10 }} onPress={() => Linking.openURL(details.url)}>Read full article here</Text>
          <Text> {details.body}</Text>
        </Animated.View>
        }
      </View>
    </ScrollView>
  );
}

export default BadgerNewsDetailScreen;
