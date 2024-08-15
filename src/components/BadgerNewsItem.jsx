import {Card} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View} from 'react-native';

function BadgerNewsItem(props) {

  const navigation = useNavigation();

  function handlePress() {
    navigation.push("SpecificNews", props);
  }

  return (
    <Card onPress={handlePress} style={{marginTop: 10, marginLeft: 10, marginRight: 10, padding: 10}}>
      <Image 
        source={{uri: `https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/${props.img}`}} 
        style={{width: '100%', height: 200, marginBottom: 10}}
      />
      <Text style={{fontSize:25}}>{props.title}</Text>
    </Card>
  );
}

export default BadgerNewsItem;