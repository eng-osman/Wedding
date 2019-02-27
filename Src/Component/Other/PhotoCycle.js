import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
const PhotoCycle = (props) => (
    <View style={[style.container,props.container]} >
        <Image resizeMode='cover' source={props.image} style={style.image} />
        <View style={[style.dot, props.isConnected?{backgroundColor: 'green'}:{backgroundColor: '#de0012'}]} />
        <Text style={style.Name} >{props.Name} </Text>
        <Text style={[style.isConnected,props.isConnected?{color:'green'}:{color:'#de0012'}]}>{props.isConnected ? 'متصل' : 'غير متصل'} </Text>
    </View>
)
const style = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 18 },
    image: { width: 70, height: 70, borderRadius: 70 },
    Name: { position: 'absolute', top: 25, right: 85, fontSize: 20, color: '#494949' },
    isConnected: { position: 'absolute', right: 85, fontSize: 15, paddingTop: 5 },
    dot: { width: 15, height: 15, borderRadius: 15, position: 'absolute', right: 56,top: 8
    }
})
export default PhotoCycle;