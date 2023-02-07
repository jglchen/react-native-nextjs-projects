import * as React from 'react';
import { 
  View,
  Text
} from 'react-native';
import {styles} from '../../styles/css';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PropsType {
  backProc: any
}


export default function BackToHome({backProc}: PropsType){
    return (
      <View>
        <View style={{height: 10, width: '100%'}}></View>
        <View style={styles.horizontalView}>
           <Ionicons name="arrow-back" size={24} color="#0084ff" onPress={backProc} />
           <Text style={styles.linkText} onPress={backProc}> Back to home</Text>
         </View>  
         <View style={{height: 10, width: '100%'}}></View>
       </View> 
    );
}