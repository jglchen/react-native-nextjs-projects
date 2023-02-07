import * as React from 'react';
import { 
  SafeAreaView, 
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
const { width } = Dimensions.get("window");
import {Button, Divider} from 'react-native-elements';
import RenderHtml from 'react-native-render-html';
import SubHead from './components/subhead';
import BackToHome from './components/backtohome';
import Footer from './components/footer';
import {styles} from '../styles/css';
import {projectsList} from '../lib/projectslist';
import {getImageSource} from '../lib/imagesource';

interface PropsType {
  route: any;
  navigation: any;
}

export default function DetailsScreen({ route, navigation }: PropsType) {
  
    const { id } = route.params;
    // @ts-ignore
    const { title, description , siteurl, appurl, source, nativepub, nativesource, docker, siteimg, mobileimg, contentHtml} = projectsList.find(item => item.id == id);
    setTimeout(() => {
      navigation.setOptions({ title: title });
    }, 100); 
    const panelWidth = parseInt((width * 0.98).toString());
    const imgSize = [
      {width: parseInt((panelWidth * 0.73).toString()), height: parseInt((panelWidth * 0.73 * 1600 / 2560).toString())},
      {width: parseInt((panelWidth * 0.21).toString()), height: parseInt((panelWidth * 0.21 * 2436 / 1125).toString())}
    ];
 
    let siteLink;
    if (siteurl){
       siteLink = <Button title='View the Site' onPress={() => Linking.openURL(siteurl)} />;
    }
    let appLink;
    if (appurl){
       appLink = <Button title='View the App' onPress={() => Linking.openURL(appurl)} />;
    }
    let sourceLink;
    if (source){
      sourceLink = <Button title='GitHub' onPress={() => Linking.openURL(source)} />;
    }

    let navSourceLink;
    if (nativesource){
      navSourceLink = <Button title='GitHub(Mob)' onPress={() => Linking.openURL(nativesource)} />;
    }

    let expoLink;
    if (nativepub){
      expoLink = <Button title='Expo Publish' onPress={() => Linking.openURL(nativepub)} />;
    }
    let contentView;
    if (contentHtml){
      contentView = (
         <View style={styles.paragraphView}>
            <RenderHtml source={{ html: contentHtml.replace(/<p>/g,'<p style="font-size: 1.5rem; line-height: 30;">').replace(/<ul>/g,'<ul style="font-size: 1.5rem; line-height: 30;">').replace(/<ol>/g,'<ol style="font-size: 1.5rem; line-height: 30;">') }} contentWidth={width*0.9} />           
         </View> 
      ); 
    }
    let siteImage;
    if (siteimg){
      if (siteurl || appurl){
        siteImage = (
          <TouchableOpacity onPress={() => Linking.openURL(siteurl || appurl)}>
             <Image source={getImageSource(siteimg)} style={imgSize[0]} />
          </TouchableOpacity>
        ); 
      }else{
        siteImage = (
          <Image source={getImageSource(siteimg)} style={imgSize[0]} />
        ); 
      }
    }
    let mobileImage;
    if (mobileimg){
      mobileImage = (
        <TouchableOpacity onPress={() => Linking.openURL(nativepub)}>
            <Image source={getImageSource(mobileimg)} style={imgSize[1]} />
        </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView style={styles.saveAreaViewContainer}>
      <View style={styles.viewContainer}> 
         <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.verticalView}>
                <SubHead />
            </View>  
            <View style={styles.paragraphView}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
            </View>
            <View style={styles.paragraphView}>
                <Text style={{color: 'gray', fontSize: 18}}>{description}</Text>
            </View>
            {(siteLink || appLink || sourceLink) &&
              <View style={styles.listButtonView}>
                {siteLink}
                {appLink}
                {sourceLink}
              </View>
            }
            {(navSourceLink || expoLink) &&
              <View style={styles.listButtonView}>
                {expoLink}
                {navSourceLink}
              </View>
            }
            {docker &&
              <View style={styles.paragraphView}>
                <Text style={[styles.boldText, styles.paragraphText]}>Docker: {docker}</Text>
              </View>
            }
            {(siteImage && mobileImage) &&
               <View style={styles.listImageView}>
                 {siteImage}{mobileImage}
               </View>
            }
            {(siteImage && !mobileImage) &&
              <View style={styles.listImageView}>
                {(siteurl || appurl) &&
                <TouchableOpacity onPress={() => Linking.openURL(siteurl || appurl)}>
                  <Image source={getImageSource(siteimg)} style={{width: panelWidth, height: parseInt((panelWidth * 1600 / 2560).toString())}} />
                </TouchableOpacity>
                }
                {(!siteurl && !appurl) && 
                  <Image source={getImageSource(siteimg)} style={{width: panelWidth, height: parseInt((panelWidth * 1600 / 2560).toString())}} />
                }
              </View>
            }
            {contentView}
            <BackToHome  backProc={() => navigation.navigate('Home')} />
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
  