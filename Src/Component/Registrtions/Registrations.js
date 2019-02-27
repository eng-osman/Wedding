import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Dimensions, Text } from 'react-native';
import StepperView from '../Other/StepperView';
import HeaderNavigation from "../Native/HeaderNavigation";
import RegistrationPersonInf from "../../Styles/RegistrationPersonInfo";
import CustomPicker from '../Native/CustomPicker'
import { connect } from "react-redux";
import { Age, PickerConfig, ColoSkin, ReadyMerage } from '../DataStrucure/Data'
import NextBottom from "../Native/NextBottom";
import Picker from 'react-native-picker'
import { Fonts } from "../../Fonts/Fonts";
import { AndType, BetweenType, ReadyToMerageType, ColorSkinType } from "../../Actions/Registrations/Registrations";
import { ReadyToMerageAndBetweenColorSkin } from "../../Validations/Validation";

class Registrations extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static navigationOptions = HeaderNavigation
    render() {
        return (
            <ImageBackground style={[styles.container]} source={require('../../Photos/background.png')}>
                <StepperView currentPosition={5} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={{
                            position: 'absolute',
                            textAlign: "right",
                            color: 'white',
                            fontSize: 20,
                            right: 0,
                            bottom: 70,
                            fontFamily: Fonts.BlueOcean,
                            color: '#fbcde9',
                            fontSize: 10
                        }} >
                            ابحث  عن  اشخاص  يتراوح  عمرهم  بين
                </Text>
                        <CustomPicker
                            containerStyle={{ width: Dimensions.get('window').width / 3, marginTop: 12 }}
                            placeholder={this.props.Regist.And || "0 0"}
                            onPress={() => {
                                Picker.init({
                                    pickerData: Age(),
                                    onPickerConfirm: (And) => {
                                        const v = And[And.length - 1].toString()
                                        this.props.AndType(parseInt(v, 10))
                                    },
                                    onPickerCancel: () => { },
                                    ...PickerConfig
                                });
                                Picker.show();
                            }}
                        />
                        <CustomPicker
                            containerStyle={{ width: Dimensions.get('window').width / 3, marginTop: 12 }}
                            placeholder={this.props.Regist.Between || "0 0"}
                            onPress={() => {
                                Picker.init({
                                    pickerData: Age(),
                                    onPickerConfirm: (Between) => {
                                        const c = Between[Between.length - 1].toString()
                                        this.props.BetweenType(parseInt(c, 10))
                                    },
                                    onPickerCancel: () => { },
                                    ...PickerConfig
                                });
                                Picker.show();
                            }}
                        />

                    </View>
                    <CustomPicker
                        title="لون  بشرتي"
                        size={1}
                        placeholder={this.props.Regist.ColorSkin || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: ColoSkin(),
                                onPickerConfirm: (ColorSkin) => {
                                    const x =  ColorSkin[ColorSkin.length - 1].toString()
                                    this.props.ColorSkinType(x)
                                },
                                onPickerCancel: () => { },
                                ...PickerConfig
                            });
                            Picker.show();
                        }}
                    />
                    <CustomPicker
                        title="استعدادي  للزواج"
                        size={1}
                        placeholder={this.props.Regist.ReadyToMerage || "اختار"}
                        onPress={() => {
                            Picker.init({
                                pickerData: ReadyMerage(),
                                onPickerConfirm: (ReadyToMerage) => {
                                    const c =ReadyToMerage[ReadyToMerage.length - 1].toString()
                                    this.props.ReadyToMerageType(c)
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
                             if(ReadyToMerageAndBetweenColorSkin(this.props.Regist))
                             {
                                 this.props.navigation.navigate("iWantToKnow", { Title: 'التسجيل' });
                             }
                            // this.props.navigation.navigate("iWantToKnow", { Title: 'التسجيل' });
                            // console.log(this.props.Regist)
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
export default connect(mapStateToProps, { AndType, BetweenType, ReadyToMerageType, ColorSkinType })(Registrations)
const styles = StyleSheet.create(RegistrationPersonInf)