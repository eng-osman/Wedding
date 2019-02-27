import React from 'react';
import {View,StyleSheet} from 'react-native';
 const CircleView = ({style,background})=>(
    <View style={StyleSheet.flatten([styles.circle,style])} backgroundColor={background}/>
)
export default CircleView;

const styles = StyleSheet.create({
    circle:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'white',
    }
    
})