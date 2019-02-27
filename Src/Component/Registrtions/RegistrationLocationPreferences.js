import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import StepperView from '../Other/StepperView';
import HeaderNavigation from "../Native/HeaderNavigation";
import RegistrationPersonInf from "../../Styles/RegistrationPersonInfo";
import NextBottom from "../Native/NextBottom";
import { City, Nationalty, Country, Status, PickerConfig } from '../DataStrucure/Data';
import CustomPicker from '../Native/CustomPicker';
import Picker from 'react-native-picker'
import { connect } from 'react-redux'
import { CityType, CountryType, NationaltyType, StatusType } from '../../Actions/Registrations/Registrations'
import { CityCountryRelagin } from '../../Validations/Validation'
class RegistrationLocationPreferences extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = HeaderNavigation
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../Photos/background.png')}>
                <StepperView currentPosition={4} />
                <View style={{ justifyContent: "space-evenly", flex: 1 }}>
                    <CustomPicker
                        title="مدينة اقامتي"
                        size={1}
                        placeholder={this.props.Regist.City || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: City(),
                                onPickerConfirm: (City) => {
                                    this.props.CityType(City[City.length - 1].toString())
                                },
                                onPickerCancel: () => { },
                                ...PickerConfig
                            });
                            Picker.show();
                        }}
                    />
                    <CustomPicker
                        title="بلد اقامتي"
                        size={1}
                        placeholder={this.props.Regist.Country || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: Country(),
                                onPickerConfirm: (Country) => {
                                    this.props.CountryType(Country[Country.length - 1].toString())
                                },
                                onPickerCancel: () => { },
                                ...PickerConfig
                            });
                            Picker.show();
                        }}
                    />
                    <CustomPicker
                        title="جنسيتي"
                        size={1}
                        placeholder={this.props.Regist.Nationalty || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: Nationalty(),
                                onPickerConfirm: (Nationalty) => {
                                    this.props.NationaltyType(Nationalty[Nationalty.length - 1].toString())
                                },
                                onPickerCancel: () => { },
                                ...PickerConfig
                            });
                            Picker.show();
                        }}
                    />
                    <CustomPicker
                        title="حالتي الاجتماعية"
                        size={1}
                        placeholder={this.props.Regist.Status || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: Status(),
                                onPickerConfirm: (Status) => {
                                    this.props.StatusType(Status[Status.length - 1].toString())
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
                             if (CityCountryRelagin(this.props.Regist)) {
                                 this.props.navigation.navigate("Registrations", { Title: 'التسجيل' });
                             }
                            //this.props.navigation.navigate("Registrations", { Title: 'التسجيل' });
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

export default connect(mapStateToProps, { CityType, CountryType, NationaltyType, StatusType })(RegistrationLocationPreferences)
const styles = StyleSheet.create(RegistrationPersonInf)