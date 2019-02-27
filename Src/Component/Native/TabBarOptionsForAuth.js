import React from 'react';
import { Image } from 'react-native'
export default (focus,unfocus) => {
    return {
        tabBarIcon: ({ focused }) => {
            if (focused) {
                return (
                    <Image source={focus}
                        style={{ width: 25, height: 25, justifyContent: 'center', alignSelf: 'center' }}
                    />
                )
            } else {
                return (
                    <Image source={unfocus}
                        style={{ width: 25, height: 25, justifyContent: 'center', alignSelf: 'center' }}
                    />
                )
            }
        }, tabBarOptions: {
            showLabel: false,
        }
    }
}
