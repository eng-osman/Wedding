import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet
} from "react-native";
import { connect } from 'react-redux'
import SocialMedia from "../Other/SocialMedia";
import TextInput from "../../Component/Native/TextInput";
import RegistrationAccoun from '../../Styles/RegistrationAccount'
import text from '../../Styles/TextBox'
import HeaderNavigation from '../Native/HeaderNavigation';
import NextBottom from '../Native/NextBottom';
import { Name, Email, Password, ConfirmPassword, RegistFirstSenario, RegistByFaceBook } from '../../Actions/Registrations/Registrations'
import { LoginWithUs } from "../../Actions/Registrations/Login";
import { EmailNamePassword } from '../../Validations/Validation'
class RegistrationAccount extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = HeaderNavigation;
  _onBtnPress() {
    if (EmailNamePassword(this.props.Regist)) {
      this.props.RegistFirstSenario(this.props.Regist, () => {
        this.props.Regist.StatusCode === 200 ?
          this.props.navigation.navigate("PersonalInfo", { Title: 'التسجيل' }) :
          alert(this.props.Regist.Erorr)
      })
    }
  }
  render() {
    return (
      <ImageBackground
        style={styles.backgroundContainer}
        source={require("../../Photos/background.png")}
      >
        <TextInput
          placeholder="اسم المستخدم"
          placeholderStyle={text}
          placeholderTextColor="#fbcde9"
          onChangeText={n => {
            this.props.Name(n)
          }}
        />
        <TextInput
          placeholder="الايميل"
          placeholderStyle={text}
          placeholderTextColor="#fbcde9"
          onChangeText={n => {
            this.props.Email(n)
          }}
        />
        <TextInput
          placeholder="كلمة السر"
          placeholderStyle={text}
          placeholderTextColor="#fbcde9"
          onChangeText={n => {
            this.props.Password(n)
          }}
        />
        <TextInput
          placeholder=" اعادة كلمة السر"
          placeholderStyle={text}
          placeholderTextColor="#fbcde9"
          onChangeText={n => {
            this.props.ConfirmPassword(n)
          }}
        />
        <NextBottom style={styles.signInButton} onPress={() => { this._onBtnPress() }} />
        <SocialMedia
          onFaceBookPress={() => {
            this.props.RegistByFaceBook(()=>{
              this.props.RegistFirstSenario(this.props.Regist,()=>{
                this.props.navigation.navigate("PersonalInfo", { Title: 'التسجيل' }) 
              },()=>{alert(this.props.Regist.Erorr)})
            })
          }}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create(RegistrationAccoun);
const mapStateToProps = state => {
  return {
    Regist: state.Registrations,
    Login: state.Login
  }
}
export default connect(mapStateToProps, {
  Name, Password, ConfirmPassword, Email, RegistFirstSenario, RegistByFaceBook, LoginWithUs
})(RegistrationAccount)
