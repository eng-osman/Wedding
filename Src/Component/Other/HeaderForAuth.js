import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import iccrown from '../../Photos/iccrown.png'

const HeaderForAuth = (props) => (
    <View style={styles.View} >
        <Text style={styles.text} >{props.title} </Text>
        <Image source={iccrown} style={styles.Image} />
    </View>
)
const styles = StyleSheet.create({
    Image: { height: 40, width: 40, position: 'absolute', top: 4, right: 15 },
    text: { color: 'white', fontSize: 30, alignSelf: 'center', paddingTop: 5 },
    View: { marginVertical: 10 }
})
export default HeaderForAuth;