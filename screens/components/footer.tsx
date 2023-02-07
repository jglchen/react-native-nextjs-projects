import * as React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const subTitle = 'John Chen - A talent you are looking for web solutions';

export default function Footer(){
    return (
        <View style={{paddingVertical: 10}}>
          <View style={styles.listItemView}>
            <Text style={styles.titleText}>
            {subTitle}
            </Text>
          </View>
          <View style={styles.listDivView}>
            <View>
              <Text style={styles.itemText}>John Chen</Text>
            </View>
            <TouchableOpacity onPress={async () => {try {await Linking.openURL('mailto:jglchen@outlook.com')}catch(e){}}}>
             <Text style={styles.linkText}>
                jglchen@outlook.com
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listDivView}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/jglchen') }>
              <View style={styles.divView}>
                <Ionicons name="logo-facebook" size={24} />
                <Text style={styles.linkText}>
                {' jglchen'}
                </Text>
              </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jglchen') }>
              <View style={styles.divView}>
                <Ionicons name="logo-github" size={24} />
                <Text style={styles.linkText}>
                {' jglchen'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    listItemView: {
        width: "100%",
        paddingBottom: 10        
    },
    titleText: {
      fontSize: 20,
    }, 
    listDivView: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      paddingBottom: 10
    },
    divView: {
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'center',
    },
    itemText: {
      fontSize: 18,
      lineHeight: 24,
      color: 'gray',
    }, 
    linkText: {
      color: '#0084ff', 
      fontSize: 20
    },
});
  