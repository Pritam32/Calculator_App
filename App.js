import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Mainscreen from './screens/Mainscreen'
import Spalshscreen from './screens/Spalshscreen'

const Stack= createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SpalshScreen'>
        <Stack.Screen name="Spalshscreen" component={Spalshscreen} options={{headerShown:false}}/>
        <Stack.Screen name="Mainscreen" component={Mainscreen}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App