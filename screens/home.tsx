import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { 
  SafeAreaView, 
  ScrollView,
  View,
  Text,
  Linking
} from 'react-native';
import {Divider} from 'react-native-elements';
import PrimeHead from './components/primehead';
import Footer from './components/footer';
import {styles} from '../styles/css';
import {projectsList} from '../lib/projectslist';


function briefStart() {
   return (
      <Text style={styles.paragraphText}>        
         If you want to build a website for your business venture. 
         Selecting the right technology for developing an application or website is becoming more challenging. 
         Among all, React is considered the fastest-growing Javascript framework. With a quick learning curve, reusable components, and clean abstraction, React is a clear win for front-end developers across the globe. 
         In addition to the front-end applications, <Text style={styles.boldText}>React apps with Node backend services</Text> are easy to build up full-function web applications.     
      </Text>
   );
}


function IntroFull(){
   return (
      <View>
         <View style={styles.paragraphView}>
            {briefStart()}
         </View>
         <View style={styles.paragraphView}>
            <Text style={styles.paragraphText}>        
               Internet traffic from mobile devices has surpassed the traffic from desktops for many years. 
               With each passing year, the gap between mobile and desktop usage is becoming more pronounced. 
               Providing <Text style={styles.boldText}>a mobile-friendly web application</Text> has been becoming more and more important. 
               Responsive Web Design (RWD) plays a vital key role in mobile-friendly applications. 
               Furthermore, mobile apps will be the ultimate means for mobile-friendly solutions.
            </Text>
         </View>
         <View style={styles.paragraphView}>
            <Text style={styles.paragraphText}>        
               A native mobile application is developed for use on a particular platform or device. 
               In Android development, people can write codes in Kotlin or Java; in iOS, you can use Swift or Objective-C. 
               <Text style={styles.boldText}>React Native</Text> is a framework for building Android and iOS applications using React and the app platform’s native capabilities. 
               With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components. 
               By following similar plan designs, you can construct rich UI for native applications by IOS and Android. 
            </Text>
         </View>
         <View style={styles.paragraphView}>
            <Text style={styles.paragraphText}>
               If you want to develop a web application and/or a mobile application, React will be a strong building block for your development. 
               A professional with strong knowledge and skills of <Text style={styles.boldText}>JavaScript</Text>, <Text style={styles.boldText}>Node.js</Text>, <Text style={styles.boldText}>React</Text>, <Text style={styles.boldText}>React Native</Text>, and solid experience of databases such as <Text style={styles.boldText}>MySQL</Text>, etc. as well as with a good grasp of <Text style={styles.boldText}>CSS</Text> and <Text style={styles.boldText}>RWD</Text> will be the ideal one to help you develop the projects. <Text style={styles.boldText}>My name is John Chen, I am exactly the one you are looking for.</Text>
            </Text>
         </View>
         <View style={styles.paragraphView}>
            <Text style={styles.paragraphText}>
               Several side projects are listed below to demonstrate React websites and associated React Native apps with similar plan designs:
            </Text>
         </View>
      </View>
   );
}

function ListItem({children}: {children: React.ReactNode}){
   return (
      <View style={{paddingRight: 12}}>
         <Text style={styles.itemText}>{children}</Text>
      </View>   
   );
}

interface PropsType {
  navigation: any
}

export default function HomeScreen({ navigation }: PropsType) {
   const [introExp, setIntroExp] = useState(false);

   useFocusEffect(
      useCallback(() => {
         setIntroExp(false);
      }, [navigation])
   );
    
   let introBriefing = (
      <View>
         <View style={[styles.paragraphView, {height: 168}]}>
            {briefStart()}
            <Text style={styles.linkText} onPress={() => setIntroExp(true)}>More...</Text>
         </View>
      </View>
   );  
   if (introExp){
      introBriefing = (
         <IntroFull />
      );
   }

   return (
      <SafeAreaView style={styles.saveAreaViewContainer}>
         <View style={styles.viewContainer}> 
            <ScrollView style={styles.scrollViewContainer}>
               <View style={styles.verticalView}>
                 <PrimeHead />
               </View>  
               {introBriefing}
               <View style={[styles.paragraphView,{paddingTop: 10}]}>
                  <Text style={styles.titleText}>Skills</Text>
               </View>
               <View style={styles.horizontalListView}>
                  <ListItem>CSS</ListItem>
                  <ListItem>HTML5</ListItem>
                  <ListItem>JavaScript</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>Node.js</ListItem>
                  <ListItem>React.js</ListItem>
                  <ListItem>Next.js</ListItem>
                  <ListItem>Express.js</ListItem>
                  <ListItem>React Native</ListItem>
                  <ListItem>SQL</ListItem>
                  <ListItem>MySQL</ListItem>
                  <ListItem>Firebase</ListItem>
                  <ListItem>Docker</ListItem>
                  <ListItem>REST API</ListItem>
                  <ListItem>GraphQL</ListItem>
                  <ListItem>jQuery</ListItem>
                  <ListItem>PHP</ListItem>
               </View>
               <View style={[styles.paragraphView,{paddingTop: 10}]}>
                  <Text style={styles.titleText}>Projects</Text>
               </View>
               {projectsList.map(({id, title, description}) => (
                  <View style={styles.listItemView} key={id}>
                     <Text style={{color: '#0084ff', fontSize: 22}} onPress={() => {navigation.navigate('Details', {id})}}>{title}</Text>
                     <Text style={{color: 'gray', fontSize: 18}}>{description}</Text>
                  </View>
               ))
               } 
               <View>
                  <Divider orientation="horizontal" />
               </View>
               <Footer />
               <View style={{width: '100%', height: 30}}>
               </View>              
            </ScrollView> 
         </View>
      </SafeAreaView>
   );
}