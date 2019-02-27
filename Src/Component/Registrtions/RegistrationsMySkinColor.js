import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { ColoSkin, PickerConfig, PartnerSalary } from '../DataStrucure/Data'
import CustomPicker from '../Native/CustomPicker'
import NextBottom from '../Native/NextBottom'
import StepperView from '../Other/StepperView';
import HeaderNavigation from '../Native/HeaderNavigation';
import RegistrationPersonInfo from '../../Styles/RegistrationPersonInfo'
import Picker from 'react-native-picker';
import { connect } from "react-redux";
import { PartnerSalaryType, PartnerSkinColorType } from "../../Actions/Registrations/Registrations";

class RegistrationsMySkinColor extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = HeaderNavigation
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../Photos/background.png')}>
                <StepperView currentPosition={7} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
                <CustomPicker
                 title="لون بشرة شريك حياتي"
                 size={1}
                 placeholder={this.props.Regist.PartnerSkinColor || "اختار"}
                 onPress={() => {
                   Picker.init({
                     pickerData: ColoSkin(),
                     onPickerConfirm: (PartnerSkinColor) => {
                        this.props.PartnerSkinColorType(PartnerSkinColor[PartnerSkinColor.length - 1].toString())
                     },
                     onPickerCancel: ()=>{},
                     ...PickerConfig
                   });
                   Picker.show();
                }}
                />
                <CustomPicker
                 title="مستوي دخل شريك حياتي"
                 size={1}
                 placeholder={this.props.Regist.PartnerSalary || "اختار"}
                 onPress={() => {
                   Picker.init({
                     pickerData: PartnerSalary(),
                     onPickerConfirm: (PartnerSalary) => {
                        this.props.PartnerSalaryType(PartnerSalary[PartnerSalary.length - 1].toString())                       
                     },
                     onPickerCancel: ()=>{},
                     ...PickerConfig
                   });
                   Picker.show();
                }}
                />
                <NextBottom
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        this.props.navigation.navigate("EducationPreferences",{Title: 'التسجيل'});
                    }}
                />
                </View>
            </ImageBackground>
        )
    }
}
const mapStateToProps = state => {
    return {
      Regist: state.Registrations
    }
  }
  export default connect(mapStateToProps,{ PartnerSalaryType, PartnerSkinColorType}) (RegistrationsMySkinColor)
const styles = StyleSheet.create(RegistrationPersonInfo)