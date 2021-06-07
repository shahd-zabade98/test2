import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen,RegistrationScreen,UserProfileScreen,HomeStatusScreen,InformationScreen,ControlScreen,MainScreen,RegistrationScreen1, UsersScreen} from './src/screens'
import {decode, encode} from 'base-64'



if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();
export default function App(){ 
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)

  
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Registration'>
      <Stack.Screen name="Registration"  component={MainScreen} />
      <Stack.Screen name="Login" title="Login" component={LoginScreen} />
      <Stack.Screen name="Sign up as home owner"  component={RegistrationScreen} />
      <Stack.Screen name="User Profile" title="User Profile" component={UserProfileScreen} />
      <Stack.Screen name="Home Status" title="Home Status" component={HomeStatusScreen} />
      <Stack.Screen name="ControlScreen" title="Control your house" component={ControlScreen} />
      <Stack.Screen name="Sign up as firefighter"  component={RegistrationScreen1} />   
      <Stack.Screen name="Users"  component={UsersScreen} /> 
      <Stack.Screen name="Information"  component={InformationScreen} /> 
    </Stack.Navigator>
       
      
       
    </NavigationContainer>
    
  );
  

}

import {Platform, InteractionManager} from 'react-native';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}