import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import { requestPermissionsAsync } from 'expo-media-library';
import AwesomeButton from 'react-native-really-awesome-button';
export default function UserProfileScreen({navigation}) {
  //const entityRef = firebase.firestore().collection('entities');
    //let Infoo = route.params;
   /* entityRef.get()
    .then((querySnapshot) =>{
        querySnapshot.forEach()
    })*/
    const onHome = () => {
      navigation.navigate('Home Status');
      
  }
  
    

  /* async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;
    await this.registerForPushNotificationsAsync();
  }*/
  const sendPushNotification = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[W-gasqP7l2vSV0O0hch9pX]',
        sound: 'default',
        title: 'Demo',
        body: 'Demo notificaiton'
      })
    });
  };
    return(
  
        <View style={styles.container }>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
              <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                   
                    <View style={styles.action1}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.text}>   Shahd Zabade</Text>
                  </View>
                  <View style={styles.action1}>
                  <Entypo name="location-pin" size={24} color="black" />
                   
                  <Text style={styles.text}>   Tulkarm , Biet Leed</Text>
                     </View>
                     <View style={styles.action1}>
                     <Entypo name="phone" size={24} color="black" />
                     <Text style={styles.text}>   0595407670</Text>
                  </View>
                  <View style={styles.action1}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                  <Text style={styles.text}>   7</Text>
                   </View>
                   <View style={styles.action2}>
                   <Text style={styles.text}>   Home plan:</Text>
                   <Image
                    style={styles.logo1}
                    source={require('../../../assets/2.gif')}
                />
                </View>
                   <View style={styles.action}>
                   <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onHome() 
                    next(); }}> Home Status </AwesomeButton>
                
                </View>
                 </KeyboardAwareScrollView>
            </View> 
        )
    















}