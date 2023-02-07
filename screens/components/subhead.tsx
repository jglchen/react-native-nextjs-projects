import * as React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {subjectName} from './subjectname';

export default function SubHead(){
   return (
      <View style={{paddingBottom: 20}}>
            <Image source={require('../../assets/images/profile.jpg')} style={styles.image} />
            <Text style={styles.titleText}>{subjectName}</Text> 
      </View>
   ); 
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  }, 
  image: {
    height: 120,
    width: 120,
    borderRadius: 120,
    marginBottom: 20,
  },
});

