import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    FlatList,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    Image,
    Keyboard
} from 'react-native';
import background from '../../Photos/background.png'
import icsend from '../../Photos/icsend.png';
import iccamera from '../../Photos/iccamera.png'
import ChatItem from '../Other/ChatItem';
import HeaderNavigation from '../Native/HeaderNavigation'
import BackEnd from './BackEnd'
import { NavigationEvents } from 'react-navigation'

export default class Chat extends Component {

    static navigationOptions = HeaderNavigation
    constructor() {
        super();
        this.state = {
            _id: '',
            text: '',
            messages: [],
            disabled: true,
            fetching: false,
            autoFocus: false
        }
    }
    onTyping(text) {
        if (text && text.length >= 0) {
            this.setState({
                disabled: false,
                text
            });
        } else {
            this.setState({
                disabled: true
            })
        }
    }
    onSendBtnPressed() {
        const d = new Date()
        const param = BackEnd.getParam()
        const newMsg = {
            _id: BackEnd.getUid(),
            text: this.state.text,
            date: d.toDateString(),
            user: {
                _id: param._id,
                name: param.name
            }
        }
         BackEnd.sendMessage(newMsg, () => {
               this.setState({
                   messages: BackEnd.loadMessage(param._id)
               })
         })

        this.textInput.clear();
        Keyboard.dismiss();
    }
    async  fitch() {
        const param = await BackEnd.getParam()
        const d = await BackEnd.loadMessage(param._id)
        this.setState({
            messages: d
        })
    }

    render() {
        let behavior = '';
        if (Platform.OS == 'ios') {
            behavior = 'padding'
        }
        return (
            <ImageBackground
                style={styles.container}
                source={background}
            >
                <NavigationEvents
                    onDidFocus={() => {
                        this.fitch()
                    }}
                />
                <FlatList
                    style={{ marginTop: 70 }}
                    inverted
                    data={this.state.messages}
                    renderItem={({ item }) => (<ChatItem message={item} user={item} />)}
                    keyExtractor={(item, index) => (index.toString())}
                />
                <KeyboardAvoidingView behavior={behavior}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#9b9b9b' }}  >
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <Image source={iccamera} resizeMode='center' />
                        </TouchableOpacity>
                        <TextInput
                            autoFocus={this.state.messages.length !== 0 ? true: false}
                            placeholder='اكتب رسالة'
                            placeholderTextColor='white'
                            multiline
                            onChangeText={(text) => { this.onTyping(text) }}
                            ref={inpu => this.textInput = inpu}
                            style={{ width: '75%', color: 'white' }}
                        />
                        <TouchableOpacity
                            disabled={this.state.disabled}
                            onPress={this.onSendBtnPressed.bind(this)}
                        >
                            <Image source={icsend} resizeMode='center' />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%'
    },
    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#dadfea'
    },
    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 14,
        paddingHorizontal: 10,
        flex: 1,
        paddingVertical: 5,
        marginLeft: 5
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 5
    },
    enabledBtn: {
        backgroundColor: '#476DC5'
    },
    disabledBtn: {
        backgroundColor: '#89a9f4'
    }
});
