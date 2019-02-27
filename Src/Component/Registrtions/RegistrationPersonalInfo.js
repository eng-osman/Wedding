import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, AsyncStorage } from "react-native";
import CustomPicker from "../Native/CustomPicker";
import StepperView from "../Other/StepperView";
import Picker from "react-native-picker";
import HeaderNavigation from "../Native/HeaderNavigation";
import NextBottom from "../Native/NextBottom";
import RegistrationPersonInf from '../../Styles/RegistrationPersonInfo'
import { PickerConfig, Gender } from '../DataStrucure/Data';
import { GenderType, ImageUri } from "../../Actions/Registrations/Registrations";
import { LoginWithUs } from "../../Actions/Registrations/Login";
import { connect } from "react-redux";
import { GenderImage } from '../../Validations/Validation';

class RegistrationPersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = HeaderNavigation;
  _handlerPicker = (Gender) => {
    this.props.GenderType(Gender)
  }
  componentDidMount() {
    this.props.LoginWithUs(this.props.Regist)
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../Photos/background.png")}
      >
        <StepperView currentPosition={2} />
        <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
          <CustomPicker
            title="نوعي"
            size={1}
            placeholder={this.props.Regist.Gender || "اختار"}
            onPress={() => {
              Picker.init({
                pickerData: Gender(),
                onPickerConfirm: (Gender) => {
                  const res = Gender[Gender.length - 1].toString()
                  this._handlerPicker(res)
                },
                onPickerCancel: () => { },
                ...PickerConfig
              });
              Picker.show();
            }}
          />
          <NextBottom
            style={{ alignSelf: "center" }}
            onPress={async () => {
              const x = await AsyncStorage.getItem('token')
              if (GenderImage(this.props.Regist.Gender) && x !== null) {
                this.props.navigation.navigate('EthnicPreferences', { Title: 'التسجيل' })
              }
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
    Regist: state.Registrations,
    Login: state.Login
  }
}
const styles = StyleSheet.create(RegistrationPersonInf);
export default connect(mapStateToProps, { GenderType, ImageUri, LoginWithUs })(RegistrationPersonalInfo)