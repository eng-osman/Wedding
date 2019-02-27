import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, AsyncStorage } from 'react-native';
import StepperView from '../Other/StepperView';
import HeaderNavigation from '../Native/HeaderNavigation';
import NextBottom from '../Native/NextBottom';
import { EducationLevel } from '../DataStrucure/Data';
import MultiSelector from '../Other/MultiSelect';
import RegistrationPersonInfo from '../../Styles/RegistrationPersonInfo'
import { connect } from "react-redux";
import { EducationType, RegistComplete } from "../../Actions/Registrations/Registrations";
import { Education } from "../../Validations/Validation";

class RegistrationEducationPreferences extends Component {
    constructor(props) {
        super(props)
    }
    Education = []
    static navigationOptions = HeaderNavigation
    filtter = (arr) => {
        let unique_array = []
        for (let i = 0; i < arr.length; i++) {
            if (unique_array.indexOf(arr[i]) == -1) {
                unique_array.push(arr[i])
            }
            else {
                unique_array = this.removeFromArray(unique_array, arr[i])
            }
        }
        return unique_array
    }
    removeFromArray = (arr, value) => {
        let newArr = arr.filter((v, i, r) => {
            return v !== value
        });
        return newArr
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../Photos/background.png')}>
                <StepperView currentPosition={8} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
                    <MultiSelector
                        data={EducationLevel()}
                        title='مستوي تعليمي'
                        onChose={(f) => {
                            this.Education.push(f);
                            this.props.EducationType(this.filtter(this.Education))
                        }}
                    />
                    <NextBottom
                        style={{ alignSelf: "center" }}
                        onPress={async () => {
                            if (this.props.Regist.Gender == 'انثي') {
                                this.props.navigation.navigate("BeardPreferences", { Title: 'التسجيل' });
                            }
                            else {
                                try {
                                    if (Education(this.props.Regist)) {
                                        const token = await AsyncStorage.getItem('token')
                                        await this.props.RegistComplete(this.props.Regist, token)
                                        this.props.navigation.navigate("auth");
                                    }
                                }
                                catch (e) {
                                    console.log(e)
                                }
                            }
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
const styles = StyleSheet.create(RegistrationPersonInfo)
export default connect(mapStateToProps, { EducationType, RegistComplete })(RegistrationEducationPreferences)