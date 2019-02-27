import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import StepperView from "../Other/StepperView";
import HeaderNavigation from "../Native/HeaderNavigation";
import RegistrationPersonInf from "../../Styles/RegistrationPersonInfo";
import Picker from 'react-native-picker';
import NextBottom from "../Native/NextBottom";
import CustomPicker from '../Native/CustomPicker'
import { Age, Height, Weight, Ralagian, PickerConfig } from '../DataStrucure/Data'
import { connect } from "react-redux";
import { ReligionType, WeightType, HeightType, AgeType } from "../../Actions/Registrations/Registrations";
import { AgeHeightWeightReligion } from '../../Validations/Validation'
class RegistrationEthnicPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static navigationOptions = HeaderNavigation;
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../Photos/background.png")}
      >
        <StepperView currentPosition={3} />
        <View style={{ justifyContent: "space-evenly", flex: 1 }}>
          <CustomPicker
            title="عمري"
            size={1}
            placeholder={this.props.Regist.Age || "اختار"}
            onPress={() => {
              Picker.init({
                pickerData: Age(),
                onPickerConfirm: (Age) => {
                  const res = Age[Age.length - 1].toString() 
                  this.props.AgeType(parseInt(res,10))
                },
                onPickerCancel: () => { },
                ...PickerConfig
              });
              Picker.show();
            }}
          />
          <CustomPicker
            title="طولي"
            size={1}
            placeholder={this.props.Regist.Height || "اختار"}
            onPress={() => {
              Picker.init({
                pickerData: Height(),
                onPickerConfirm: (Height) => {
                  const res = Height[Height.length - 1].toString()
                  this.props.HeightType(parseInt(res,10))
                },
                onPickerCancel: () => { },
                ...PickerConfig
              });
              Picker.show();
            }}
          />
          <CustomPicker
            title="وزني"
            size={1}
            placeholder={this.props.Regist.Weight || "اختار"}
            onPress={() => {
              Picker.init({
                pickerData: Weight(),
                onPickerConfirm: (Weight) => {
                  const res = Weight[Weight.length - 1].toString()
                  this.props.WeightType(parseInt(res,10))
                },
                onPickerCancel: () => { },
                ...PickerConfig
              });
              Picker.show();
            }}
          />
          <CustomPicker
            title="ديني"
            size={1}
            placeholder={this.props.Regist.Religion || "اختار"}
            onPress={() => {
              Picker.init({
                pickerData: Ralagian(),
                onPickerConfirm: (Ralagian) => {
                  const res = Ralagian[Ralagian.length - 1].toString()
                  this.props.ReligionType(res)
                },
                onPickerCancel: () => { },
                ...PickerConfig
              });
              Picker.show();
            }}
          />
          <NextBottom
            style={{ alignSelf: "center" }}
            onPress={() => {
              //console.log(this.props.Regist)
                if (AgeHeightWeightReligion(this.props.Regist)) {
                  console.log(this.props.Regist)
                  this.props.navigation.navigate("RegistrationLocationPreferences", { Title: 'التسجيل' });
                }
               //this.props.navigation.navigate("RegistrationLocationPreferences",{Title: 'التسجيل'});
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
    Regist: state.Registrations
  }
}
export default connect(mapStateToProps, { AgeType, WeightType, HeightType, ReligionType })(RegistrationEthnicPreferences)
const styles = StyleSheet.create(RegistrationPersonInf);