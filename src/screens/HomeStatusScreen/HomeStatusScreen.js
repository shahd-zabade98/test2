import React, { useState,setState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity,FlatList, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons,FontAwesome5,Ionicons,MaterialIcons} from '@expo/vector-icons';
import * as  Notifications from 'expo-notifications';

import AwesomeButton from 'react-native-really-awesome-button';
import { useEffect } from 'react/cjs/react.development';

  
export default function HomeStatusScreen({navigation}) {
  const reference = firebase.database().ref('sensors/');
  const [S3, setS3] = useState('');
  const [S4, setS4] = useState('');
  const [S5, setS5] = useState('');
  const [S11, setS11] = useState('');
  const [S9, setS9] = useState('');
  const [S10, setS10] = useState('');
  const [S12, setS12] = useState('');
  const [S13, setS13] = useState('');
  const [S14, setS14] = useState('');
  const [S15, setS15] = useState('');
  useEffect(() =>{
    reference 
    .on('value', (snapshot) => {
      const words = (snapshot.val()).split(',');

      setS3(words[2]);
      console.log(words[2]); 
      setS4(words[3]);
      console.log(words[3]);
      setS5(words[4]);
      console.log(words[4]);
      setS11(words[10]);
      console.log(words[10]);
      setS9(words[8]);
      console.log(words[8]);
      setS10(words[9]);
      console.log(words[9]);
      setS12(words[11]);
      console.log(words[11]);
      setS13(words[12]);
      console.log(words[12]);
      setS14(words[13]);
      console.log(words[13]);
     if(words[13]=="1"){
       setS15("  Security mode")
     }else{
       setS15("  Normal mode")
     }
     if(words[2] >= "120"){
      sendPushNotification1();
     }
    })
    
  },[]);
  
  const sendPushNotification = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[GipyauD5j0_Yx-YgtQCyif]',
        sound: 'default',
        title: 'Fire alarm',
        body: 'House with ID 22 is asking for help!'
      })
    });
  };
  const sendPushNotification1 = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[GipyauD5j0_Yx-YgtQCyif]',
        sound: 'default',
        title: 'Fire alarm',
        body: 'House with ID 22 is asking for help!'
      })
    });
  };
    
  const onSubmit = () =>{
    navigation.navigate("ControlScreen");
  }

     return (
        

             <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

               
                   
                <View >
                  <Text style={styles.text}>  kitchen :</Text>
                  
                  <View style={styles.action1}>
                  <MaterialCommunityIcons name="gas-cylinder" size={24} color="black" />
                    <Text style={styles.text}>  Gas sensor= {S3}</Text>
                  </View>
                  <View style={styles.action1}>
                  <FontAwesome5 name="temperature-high" size={24} color="black" />
                    <Text style={styles.text}>  Temperature sensor= {S4}</Text>
                  </View>
                  <View style={styles.action1}>
                  <Ionicons name="water" size={24} color="black" />
                    <Text style={styles.text}>  Humidity sensor ={S5}</Text>
                  </View>
                  <View style={styles.action1}>
                  <MaterialCommunityIcons name="motion-sensor" size={24} color="black" />
                    <Text style={styles.text}>  motion sensor ={S11}</Text>
                  </View>
                  
                </View>

                <View >
                  <Text style={styles.text}>  Bedroom1 :</Text>
                  
                  <View style={styles.action1}>
                  <FontAwesome5 name="temperature-high" size={24} color="black" />
                    <Text style={styles.text}>  Temperature sensor= {S9}</Text>
                  </View>
                  <View style={styles.action1}>
                  <Ionicons name="water" size={24} color="black" />
                    <Text style={styles.text}>  Humidity sensor ={S10}</Text>
                  </View>
                  <View style={styles.action1}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                    <Text style={styles.text}>  num. of people ={S12}</Text>
                  </View>
                  
                </View>
                <View >
                  <Text style={styles.text}>  Bedroom2 :</Text>
                  <View style={styles.action1}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                    <Text style={styles.text}>  num. of people ={S13}</Text>
                  </View>
                  
                </View>
                <View>
                <Text style={styles.text}>  Mode : {S15}</Text>
                </View>
                <View style={styles.action} >
                <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { sendPushNotification() 
                    next(); }}> Send Nonification </AwesomeButton>
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onSubmit() 
                    next(); }}> Control </AwesomeButton>
                </View>
                  
                </KeyboardAwareScrollView>
                </View>
               
  );
}

