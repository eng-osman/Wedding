import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ChatItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        const message = this.props.message;
       const isMyMessage = message.user._id == this.props.user._id;
        const textContainerExtra = isMyMessage ? styles.textContainerLeft : styles.textContainerRight;
        return (
            <View style={[styles.messageContainer, isMyMessage ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }]} >
                <Text style={[styles.message, textContainerExtra]}>{message.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    textContainer: {
        flexDirection: 'column',
        // marginLeft: 10,
        // marginRight: 10,
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    textContainerLeft: {
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#e6add0',
        padding: 15,
        borderBottomLeftRadius: 25,
        //borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginRight: 10
    },
    textContainerRight: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        //borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginLeft: 10
    },
    message: {
        fontSize: 16
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});
