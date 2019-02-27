import React from 'react';
import { ImageBackground, FlatList } from 'react-native';
import background from '../../Photos/background.png';
import PersonCardFav from '../../Component/Other/PersonCardFav';
import t from '../../Photos/t.jpg';
import HeaderForAuth from '../Other/HeaderForAuth'
const arr = [
    user1 = {
        location: 'اسكندريه مصر',
        height: 159,
        weight: 80,
        color: 'ابيض',
        religans: 'مسلم',
        isConnected: true,
        Name: 'تامر',
        image: t,
        age: 40,
        status: 'عازب',
    }, user2 = {
        location: 'اسكندريه مصر',
        height: 159,
        weight: 80,
        color: 'ابيض',
        religans: 'مسلم',
        isConnected: true,
        Name: 'تامر',
        image: t,
        age: 40,
        status: 'عازب',
    }, user3 = {
        location: 'اسكندريه مصر',
        height: 159,
        weight: 80,
        color: 'ابيض',
        religans: 'مسلم',
        isConnected: true,
        Name: 'تامر',
        image: t,
        age: 40,
        status: 'عازب',
    }, user4 = {
        location: 'اسكندريه مصر',
        height: 159,
        weight: 80,
        color: 'ابيض',
        religans: 'مسلم',
        isConnected: true,
        Name: 'تامر',
        image: t,
        age: 40,
        status: 'عازب',
    },
]
export default class Favuorite extends React.Component {
    render() {
        return (
            <ImageBackground
                source={background}
                style={{flex: 1}}
                resizeMode='stretch'
            >
            <HeaderForAuth title='المفضلة' />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={arr}
                    renderItem={({ item }) =>
                        <PersonCardFav
                            location={item.location}
                            Name={item.Name}
                            age={item.age}
                            status={item.status}
                            religans={item.religans}
                            color={item.color}
                            image={item.image}
                            height={item.height}
                            weight={item.weight}
                            isConnected={item.isConnected}
                        />
                    }
                >
                </FlatList>
            </ImageBackground>
        )
    }
}