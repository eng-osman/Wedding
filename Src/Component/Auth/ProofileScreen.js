import React from 'react';
import { ImageBackground, View } from 'react-native';
import Profile from '../Other/Profile';
import HeaderForAuth from '../Other/HeaderForAuth'
import PhotoCycle from '../Other/PhotoCycle'
import t from '../../Photos/t.jpg'
export default class ProfileScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../../Photos/background.png')} >
                <HeaderForAuth title='الصفحة الشخصية' />
                <View style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 20,
                    paddingVertical: 10
                }} >
                    <PhotoCycle
                        isConnected={true}
                        image={t}
                        isConnected={true}
                        container={{ marginTop: 0 }}
                    /></View>
                <Profile
                    age={25}
                    status={'عازب'}
                    religans={'مسلم'}
                    color={"ابيض"}
                    height={200}
                    weight={300}
                />

            </ImageBackground>
        )
    }
}