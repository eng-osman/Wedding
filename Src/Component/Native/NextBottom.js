import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
const NextBottom = (props) => (
    <TouchableOpacity
          onPress={props.onPress}
          style={props.style}
        >
          <Image
            source={require("../../Photos/ic_next.png")}
            style={{ width: 75, height: 75 }}
          />
        </TouchableOpacity>
        
)
export default NextBottom