import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const SocialMedia = props => (
  <View style={styles.socialContainer}>
    {/* <TouchableOpacity style={styles.socialButton} onPress={props.onGooglePress}>
      <Image
        source={require("../../Photos/ic_g_plus.png")}
        style={{
          width: 32,
          height: 32
        }}
        resizeMode="stretch"
      />
    </TouchableOpacity> */}
    <TouchableOpacity
      style={styles.socialButton}
      onPress={props.onFaceBookPress}
    >
      <Image
        source={require("../../Photos/fb.png")}
        style={{
          width: 32,
          height: 32
        }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
    {/* <TouchableOpacity
      style={styles.socialButton}
      onPress={props.onTwitterPress}
    >
      <Image
        source={require("../../Photos/ic_twitter_logo.png")}
        style={{
          width: 32,
          height: 32
        }}
        resizeMode="stretch"
      />
    </TouchableOpacity> */}
  </View>
);
const styles = StyleSheet.create({
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 32,
    backgroundColor: "#EA85C1",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default SocialMedia;
