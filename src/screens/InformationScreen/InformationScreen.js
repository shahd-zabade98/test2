import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../config';
import { FontAwesome , Entypo, MaterialIcons,MaterialCommunityIcons,FontAwesome5, Ionicons} from '@expo/vector-icons';
import { requestPermissionsAsync } from 'expo-media-library';
import { useEffect } from 'react/cjs/react.development';
import AwesomeButton from 'react-native-really-awesome-button';
export default function InformationScreen({navigation}) {
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
     if(words[13]==1){
       setS15("Security mode")
     }else{
       setS15("Normal mode")
     }
    })
    
  },[]);









    return(

 <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
                
                   
                    <View style={styles.action2}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.text}>   Shahd Zabade</Text>
                  </View>
                  <View style={styles.action2}>
                  <Entypo name="location-pin" size={24} color="black" />
                   
                  <Text style={styles.text}>   Tulkarm , Biet Leed</Text>
                     </View>
                     <View style={styles.action2}>
                     <Entypo name="phone" size={24} color="black" />
                     <Text style={styles.text}>   0595407670</Text>
                  </View>
                  <View style={styles.action2}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                  <Text style={styles.text}>   7</Text>
                   </View>
                   <View style={styles.action3}>
                   <Text style={styles.text}>   Home plan:</Text>
                   <Image
                    style={styles.logo1}
                    source={require('../../../assets/2.gif')}
                />
                </View>
               
                   
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
                  
                 
                  
                </KeyboardAwareScrollView>
                </View>
               


    )
}