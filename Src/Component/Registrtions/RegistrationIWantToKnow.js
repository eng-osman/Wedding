import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import StepperView from '../Other/StepperView';
import HeaderNavigation from '../Native/HeaderNavigation'
import { IwantToKnow } from '../DataStrucure/Data'
import MultiSelector from '../Other/MultiSelect'
import RegistrationPersonInfo from '../../Styles/RegistrationPersonInfo'
import NextBottom from '../Native/NextBottom'
import { connect } from "react-redux";
import { IWantToKnowType  } from "../../Actions/Registrations/Registrations";
import { IwantToknow } from "../../Validations/Validation";

class RegistrationIWantToKnow extends Component {
    constructor(props) {
        super(props)
    }
    Wanted = []
    static navigationOptions = HeaderNavigation;
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
                <StepperView currentPosition={6} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
                <MultiSelector
                    data={IwantToKnow()}
                    title='أود التعرف علي'
                    onChose={ (f) => {
                        this.Wanted.push(f); 
                        this.props.IWantToKnowType(this.filtter(this.Wanted))
                    }}
                />
                <NextBottom
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        if(IwantToknow(this.props.Regist)) {
                            this.props.navigation.navigate("SkinPreferences",{Title: 'التسجيل'});
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
export default connect(mapStateToProps,{IWantToKnowType})(RegistrationIWantToKnow)