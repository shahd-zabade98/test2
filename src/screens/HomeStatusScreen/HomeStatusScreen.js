import React, { useState,setState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity,FlatList, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import * as MediaLibrary from 'expo-media-library';
//import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import * as  Notifications from 'expo-notifications';

import AwesomeButton from 'react-native-really-awesome-button';
import { Value } from 'react-native-reanimated';
import { useEffect } from 'react';
import { UserProfileScreen } from '..';

export default function HomeStatusScreen() {
  const reference = firebase.database().ref('senc/');
    
  

   const onSubmitPress = () => {
        reference 
       .on('value', (snapshot) => {
           
          const words = (snapshot.val()).split(',');
           
           console.log("Room1: " + words[0]);
           
           
         });
         
        

     }
     
    /* const sendNotification = async() =>{
       const message ={
         to: "ExponentPushToken[Zqgq6UPl1_64Px6wFqbgeN]",
         sound: "defult",
         body:"there is a fire",
       };
       await fetch('https://exp.host/--/api/v2/push/send', {

            method: "POST",
            headers: {
                "host" :"exp.host",
               "accept-encoding":"gzip,deflate",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });
       
       };*/
     /*const sendNotificationtoAllUsers = async() =>{
       const users = await firebase.firestore().collection("users").get();
       users.docs.map((user) => sendNotification(user.data().token.data));
     };*/
    /* useEffect(() => {
        reference
          .on('value', snapshot => {
            const response = snapshot.val();
            //console.log(response);
            const keys = Object.keys(response);
            const questWithKeys = keys.map(id => {
            return { ...response[id], id }
            });
            setData(questWithKeys);
            console.log(questWithKeys); 
            //return { data: questWithKeys };
                
          
          });
      
    }, []);*/
      
    



     return (
        

             <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

               
                    <View style={styles.button}>
               
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onSubmitPress() 
                    next(); }}> Status </AwesomeButton>
                 
                </View>
               
                
                  
                </KeyboardAwareScrollView>
                </View>
               
  );
}

