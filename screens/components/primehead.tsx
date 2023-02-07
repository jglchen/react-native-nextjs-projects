import * as React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {subjectName} from './subjectname';

export default function PrimeHead(){
   return (
      <View style={{paddingBottom: 20}}>
            <Image source={require('../../assets/images/profile.jpg')} style={styles.image} />
            <Text style={styles.titleText}>{subjectName}</Text> 
      </View>
   ); 
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontWeight: 'bold'
  }, 
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
});

