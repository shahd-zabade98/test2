import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import { requestPermissionsAsync } from 'expo-media-library';

export default function UserProfileScreen({navigation}) {
  //const entityRef = firebase.firestore().collection('entities');
   // let Infoo = route.params;
   /* entityRef.get()
    .then((querySnapshot) =>{
        querySnapshot.forEach()
    })*/
    const onHome = () => {
      navigation.navigate('HomeStatusScreen')
 }
  /*const onControl = () => {
    navigation.navigate('Control')
}*/
    

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
                   
                    <Text style={styles.text}>   Shahd Zabade</Text>
                  </View>
                  <View style={styles.action1}>
                  
                   
                  <Text style={styles.text}>   Tulkarm , Biet Leed</Text>
                     </View>
                     <View style={styles.action1}>
                     
                     <Text style={styles.text}>   0595407670</Text>
                  </View>
                  <View style={styles.action1}>
                  
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
                   <TouchableOpacity style={styles.button} onPress={() => onHome ()}>
                    <Text style={styles.buttonTitle}>Home Status</Text>
                </TouchableOpacity>
               
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.sendPushNotification()}>
                    <Text style={styles.buttonTitle}>    notification    </Text>
                </TouchableOpacity>
                </View>
                 </KeyboardAwareScrollView>
            </View> 
        )
    



       /* <FontAwesome name="user" size={24} color="black" />
        <Entypo name="location-pin" size={24} color="black" />
        <Entypo name="phone" size={24} color="black" />
        <MaterialIcons name="family-restroom" size={24} color="black" />

      */









}