import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import TextInput from "../Native/TextInput";
import SignIn from "../../Styles/SignIn";
import text from "../../Styles/TextBox";
import NextBottom from "../Native/NextBottom";
import SocialMedia from "../Other/SocialMedia";
import { LoginWithUs, Email, Password, LoginWithFaceBook, GenrateTokenAfterLoginWithFB } from "../../Actions/Registrations/Login";
import { connect } from "react-redux";
import { EmailPassword } from "../../Validations/Validation";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTransparent: true
  };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../Photos/background.png")}
      >
        <Text style={styles.title}>تسجيل دخول</Text>
        <TextInput
          style={{ color: "white" }}
          placeholder="البريد الاليكتروني"
          placeholderTextColor="#fbcde9"
          placeholderStyle={text}
          onChangeText={(Email) => { this.props.Email(Email) }}
        />
        <TextInput
          style={{ alignItems: "center" }}
          placeholder="كلمة السر"
          placeholderTextColor="#fbcde9"
          placeholderStyle={text}
          onChangeText={(Password) => { this.props.Password(Password) }}
        />
        <TouchableOpacity>
          <Text style={styles.forgetPasswordLabelText}>نسيت كلمة المرور</Text>
        </TouchableOpacity>
        <NextBottom
          style={styles.signInButton}
          onPress={() => {
            if (EmailPassword(this.props.Login)) {
              this.props.LoginWithUs(this.props.Login, () => {
                this.props.navigation.navigate('auth')
              })
            }
          }}
        />
        <SocialMedia
          onFaceBookPress={async () => {
            this.props.LoginWithFaceBook(() => {
              this.props.GenrateTokenAfterLoginWithFB(this.props.Login, () => {
                if (this.props.Login.token) { this.props.navigation.navigate("auth") }
              })
            })
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Account", { Title: 'التسجيل' });
          }}
        >
          <Text style={styles.signUpLabelText}>حساب جديد</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create(SignIn);
const maoStateToProps = state => {
  return {
    Login: state.Login
  }
}
export default connect(maoStateToProps, { LoginWithUs, Email, Password, LoginWithFaceBook, GenrateTokenAfterLoginWithFB })(SignInScreen)
