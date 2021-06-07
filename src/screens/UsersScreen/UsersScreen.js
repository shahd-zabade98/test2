import React, { useState,useEffect,useRef } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import * as MediaLibrary from 'expo-media-library';
import * as  Notifications from 'expo-notifications';

export default function LoginScreen({navigation}) {

    const onFooterLinkPress = () => {
        navigation.navigate('Information')
    }

return(
    <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                
                
                <View style={styles.footerView}>
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}>Shahd Zabade </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
)




}