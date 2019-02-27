import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, FlatList, Text } from 'react-native';
import t from '../../Photos/t.jpg';
import HeaderForAuth from '../Other/HeaderForAuth'

const notifications = [{ id: 1, photoURL: t, name: 'محمد وليد', humanizedDate: 'منذذ 40 دقيقة', text: 'قام بزيارة ملفك الشخصي' },
{ id: 1, photoURL: t, name: 'محمد وليد', humanizedDate: 'منذذ 40 دقيقة', text: 'قام بزيارة ملفك الشخصي' },
{ id: 1, photoURL: t, name: 'محمد وليد', humanizedDate: 'منذذ 40 دقيقة', text: 'قام بزيارة ملفك الشخصي' }]


const ListItem = ({ item: { photoURL, name, humanizedDate, text } }) => (
    <View style={styles.ListItemContainer}>
        <View style={{ marginVertical: 15 }} >
            <Text style={{ fontSize: 20, color: '#444444' }} >{name}</Text>
            <Text style={{ fontSize: 15, color: '#1be8b0' }} >{humanizedDate}</Text>
            <Text style={{ fontSize: 17, color: '#444444' }} >{text}</Text>
        </View>
        <Image source={photoURL} resizeMode='cover' style={styles.Image} />
    </View>
)

export default class NotificationScreen extends Component {
    static navigationOptions = {
        headerTransparent: true
    }
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../Photos/background.png')}>
                <HeaderForAuth title='الاشعارات' />
                <FlatList data={notifications} renderItem={({ item, index }) => (<ListItem item={item} />)}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    ListItemContainer: {
        justifyContent: 'flex-end',
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center'
    },
    ImageBackground: { flex: 1 },
    Image: {
        height: 65,
        width: 65,
        borderRadius: 50, marginHorizontal: 20
    }
})