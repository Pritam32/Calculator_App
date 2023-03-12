import { View, Image,Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Mainscreen from './Mainscreen'

const Spalshscreen = () => {

    const Navigation=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            Navigation.navigate('Mainscreen');
        },3000)
    })
  return (
    <View style={{flex:1,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../screens/calculator.png')} style={{width:100,height:100}}/>
       
    </View>
  )
}

export default Spalshscreen;