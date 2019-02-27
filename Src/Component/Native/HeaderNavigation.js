import React from "react";
import { Platform, Dimensions, Text, View } from "react-native";
import ArrowLeft from "../Native/ArrowLeft";
import { Fonts } from '../../Fonts/Fonts'
const Header = (props) => (
    <Text style={{color: "white",fontFamily: Fonts.BlueOcean, alignSelf: 'flex-start' }} >
      {props.Title}
    </Text>
)
export default ({ navigation }) => {
  if (Platform.OS === "ios") {
    return {
      headerTitle: <Header Title={navigation.state.params.Title} />,
      headerTransparent: true,
      headerStyle: {
        marginTop: 20,
        width: Dimensions.get("window").width
      },
      headerTitleContainerStyle: {
        justifyContent: "center"
      },
      headerLeftContainerStyle: { position: "absolute", left: 30 },
      headerLeft: <ArrowLeft navigation={navigation} />
    };
  }
  else {
    return {
      headerTitle: <Header Title={navigation.state.params.Title} />,
      headerTransparent: true,
       headerStyle: {
         marginTop: 20,
         width: Dimensions.get("window").width - 60
       },
      headerTitleContainerStyle: {
        justifyContent: "center" ,
      },
      headerLeftContainerStyle: { position: "absolute", left: 30 },
      headerLeft: <ArrowLeft navigation={navigation} />
    };
  }
};
