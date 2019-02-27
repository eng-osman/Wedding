import React from "react";
import { TouchableOpacity, Image } from 'react-native'
import icback from '../../Photos/icback.png'

const ArrowLeft = props => (
  <TouchableOpacity onPress={() => props.navigation.goBack()}>
    <Image
      source={icback}
      style={{ width: 25, height: 25 }}
      resizeMode="cover"
    />
  </TouchableOpacity>
);  
export default ArrowLeft;
