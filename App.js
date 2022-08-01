/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *  @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from './src/utilities/New';
import NewsDisplay from './src/screens/NewsDisplay';

const Stack = createNativeStackNavigator();
const App = () => {
  return (

      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="NewsDisplay" component={NewsDisplay} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
