import React from 'react';
import { ImageBackground, FlatList, AsyncStorage } from 'react-native';
import background from '../../Photos/background.png';
import t from '../../Photos/t.jpg';
import PersonalCardForMsg from '../../Component/Other/PersonalCardForMsg';
import HeaderForAuth from '../Other/HeaderForAuth'
import BackEnd from './BackEnd';
import { Me, loadMyMsg } from "../../Actions/Operations/index";
import { connect } from "react-redux";

const Data = [
    { Name: 'محمد احمد علي', image: t, isConnected: true, msg: 'اهلا بك', time: 'ساعة' },
    { Name: 'محمد محمد علي', image: t, isConnected: true, msg: 'مرحبا بك', time: 'ساعة' },
    { Name: 'علي محمد احمد', image: t, isConnected: true, msg: 'كيف حالك', time: 'ساعة' },
    { Name: 'اسلام صبري محمد', image: t, isConnected: true, msg: 'هل يمكننا التعارف', time: 'ساعة' },
]

class Messages extends React.Component {
    static navigationOptions = {
        headerTransparent: true
    }
    async getmyyoken() {
        await AsyncStorage.getItem('token').then((c) => {
            if (c !== null) {
                this.props.Me(c); console.log(`token ${c}`);
            }
        }).catch((e) => console.log(e))
    }
    componentDidMount() {
        let obj = {}
        this.getmyyoken().then(() => {
            BackEnd.loadMsgForMe(this.props.ME.UserInfo._id,(data)=>{
                obj.data = data
                const { _id } = this.props.ME.UserInfo
                this.props.loadMyMsg(obj.data[_id]) 
                console.log(this.props.ME)
            })
        })
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={background} >
                <HeaderForAuth title='الرسائل' />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={Data}
                    renderItem={({ item }) => (
                        <PersonalCardForMsg
                            Name={item.Name}
                            image={item.image}
                            isConnected={item.isConnected}
                            msg={item.msg}
                            time={item.time}
                        />
                    )}
                />
            </ImageBackground>
        )
    }
}
const mapStateToProps = state => {
    return {
        ME: state.Operations
    }
}
export default connect(mapStateToProps, { Me, loadMyMsg })(Messages)