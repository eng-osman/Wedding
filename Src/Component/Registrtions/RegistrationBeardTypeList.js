import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';
import HeaderNavigation from '../Native/HeaderNavigation';
import RegistrationPersonInfo from '../../Styles/RegistrationPersonInfo'
import MultiSelector from '../Other/MultiSelect'
import NextBottom from '../Native/NextBottom'
import { BardTypee } from '../DataStrucure/Data';
import StepperView from '../Other/StepperView'
import { BradType, RegistComplete } from "../../Actions/Registrations/Registrations";
import { connect } from 'react-redux';
import { Brad } from "../../Validations/Validation";

class RegistrationPersonalInfo extends Component {
    constructor(props) {
        super(props);
    }
    beard = []
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
                <StepperView currentPosition={9} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }} >
                    <MultiSelector
                        data={BardTypee()}
                        title='اود ان تكون لحيت شريك حياتي'
                        onChose={(f) => {
                            this.beard.push(f);
                            this.props.BradType(this.filtter(this.beard))
                        }}
                    />
                    <NextBottom
                        style={{ alignSelf: "center" }}
                        onPress={async () => {
                            if(Brad(this.props.Regist.Brad)) {
                            const token = await AsyncStorage.getItem('token')
                            this.props.RegistComplete(this.props.Regist, token)
                            this.props.navigation.navigate("auth");
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
export default connect(mapStateToProps, { BradType, RegistComplete })(RegistrationPersonalInfo)

