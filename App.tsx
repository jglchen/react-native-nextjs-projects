import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';

const Stack = createNativeStackNavigator();

function App() {
  
  const linking = {
    prefixes: ['exp://127.0.0.1:19000/--', 'exp://exp.host/@jglchen/nextjs-projects/--'],
    config: {
      screens: {
        Home: 'home',
        Details: 'details/:id'
      },
    },
  };
  
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Build Applications from Website to Mobile' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
