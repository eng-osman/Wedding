import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import ic_down from "../../Photos/ic_down.png";
import { Fonts } from '../../Fonts/Fonts'

const CustomPicker = props => (
  <View style={props.containerStyle} >
    <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>
    <TouchableOpacity
      style={
        props.size == 1 ? styles.TouchableOpacity : styless.TouchableOpacity
      }
      onPress={props.onPress}
    >
      <Image
        resizeMode="stretch"
        style={props.size == 1 ? styles.img : styless.img}
        source={ic_down}
      />
      <Text style={styles.placeholder}>{props.placeholder || "00"}</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  TouchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  img: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 10
  },
  placeholder: {
    marginRight: 10,
    color: '#fbcde9',
    fontSize: 10,
    fontFamily: Fonts.BlueOcean
  },
  title: {
    textAlign: "right",
    color: '#fbcde9',
    fontSize: 10,
    fontFamily: Fonts.BlueOcean
  }
});
const styless = StyleSheet.create({
  TouchableOpacity: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingRight: 10
  },
  img: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 10
  }
});
export default CustomPicker;
