import React from 'react';
import { ImageBackground, FlatList, AsyncStorage } from 'react-native';
import background from '../../Photos/background.png';
import PersonCard from '../Other/PersonCard';
import TabBarOptionsForAuth from '../Native/TabBarOptionsForAuth'
import HeaderForAuth from '../Other/HeaderForAuth'
import ichomecolored from '../../Photos/ichomecolored.png'
import ichomeblack from '../../Photos/ichomeblack.png'
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { fitchAllProfile } from '../../Actions/index'
import man from '../../Photos/man.png'
import women from "../../Photos/women.jpg";
import { Me } from "../../Actions/Operations";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = TabBarOptionsForAuth(ichomecolored, ichomeblack)
    async componentDidMount() {
        const token = await AsyncStorage.getItem('token')
        if (token !== null) {
            await this.props.Me(token)
        }
    }
    async onPreee(id, Name) {
          await require('./BackEnd').setParam(id, Name)
          await require('./BackEnd').setUid(this.props.ME.UserInfo._id)
          await require('./BackEnd').setName((this.props.ME.UserInfo.name))
          this.props.navigation.navigate('Chat', { Title: 'الرسائل' });
    }

    render() {
        return (
            <ImageBackground
                source={background}
                style={{ flex: 1 }}
            >
                <NavigationEvents
                    onDidFocus={() => {
                        this.props.fitchAllProfile()
                    }}
                />
                <HeaderForAuth title='الصفحة الرئيسية' />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.allProfiles}
                    renderItem={({ item }) =>
                        <PersonCard
                            location={item.city}
                            Name={item.User.name}
                            age={item.age}
                            status={item.meriageStatus}
                            religans={item.relagin}
                            color={item.skinColor}
                            image={item.gender == 'ذكر' ? man : women}
                            height={item.height}
                            weight={item.weight}
                            isConnected={true}
                            onPress={() => this.onPreee(item.User._id, item.User.name)}
                        />
                    }
                >
                </FlatList>
            </ImageBackground>

        )
    }
}
const mapStateToProps = state => {
    return {
        allProfiles: state.FitchAllProfile.allProfiles,
        ME: state.Operations
    }
}
export default connect(mapStateToProps, { fitchAllProfile, Me })(MainPage);