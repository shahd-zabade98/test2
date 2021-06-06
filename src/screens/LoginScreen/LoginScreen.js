import React, { useState,useEffect,useRef } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import * as MediaLibrary from 'expo-media-library';
import * as  Notifications from 'expo-notifications';
//import {Constants} from 'expo-constants';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
    
   

    
    registerForPushNotifications =async () =>{
        //check permissions
        const {status} = await MediaLibrary.getPermissionsAsync();
        let finalStatus = status;

        //if no existing permission,ask user for it
        if(status !== 'granted'){
            const {status} = await MediaLibrary.requestPermissionsAsync();
            finalStatus=status;
        }
          //if no permission
        if(finalStatus !== 'granted'){return;}
        
        //get push notification token
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
       let uid = firebase.auth().currentUser.uid;
       firebase.database().ref("users").child(uid).update({
         expoPushToken : token
       });
    }
    const onLoginPress = () => {
      
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const user=response.user
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }else{
                            
                                this.registerForPushNotifications();
                                navigation.navigate("UserProfileScreen");}
                         
                       
                                 
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
        
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
               
            </KeyboardAwareScrollView>
        </View>
    )

}
