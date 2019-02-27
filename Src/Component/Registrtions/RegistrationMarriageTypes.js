import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import StepperView from '../Other/StepperView';
import icback from '../../Photos/icback.png';

const Header = (props) => (
    <TouchableOpacity onPress={() => props.navigation.goBack()}  >
        <Image source={icback} style={{ width: 25, height: 25 }} resizeMode='cover' />
    </TouchableOpacity>
)

const types = ['عادي', 'تعدد', 'مسيار', 'لا يهمني']
export default class RegistrationMarriageTypes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one: 'rgba(241, 175, 213, 0.8)',
            two: 'rgba(241, 175, 213, 0.8)',
            three: 'rgba(241, 175, 213, 0.8)',
            four: 'rgba(241, 175, 213, 0.8)',
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'التسجيل',
            headerTransparent: true,
            headerStyle: { marginTop: 40 },
            headerTitleContainerStyle: { justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginRight: 50 },
            headerLeftContainerStyle: { marginLeft: 50 },
            headerTitleStyle: { color: 'white' },
            headerLeft: <Header navigation={navigation} />
        }
    }

    onHandel = (data) => {
        this.setState({ Data: data }, () => {
            if (this.state.Data === types[0]) {
                this.setState({ one: '#ff66b3' }, () => {
                    this.setState({ two: 'rgba(241, 175, 213, 0.8)' }, () => {
                        this.setState({ three: 'rgba(241, 175, 213, 0.8)' }, () => {
                            this.setState({ four: 'rgba(241, 175, 213, 0.8)' })
                        })
                    })
                })
            } else if (this.state.Data === types[1]) {
                this.setState({ two: '#ff66b3' }, () => {
                    this.setState({ one: 'rgba(241, 175, 213, 0.8)' }, () => {
                        this.setState({ three: 'rgba(241, 175, 213, 0.8)' }, () => {
                            this.setState({ four: 'rgba(241, 175, 213, 0.8)' })
                        })
                    })
                })
            } else if (this.state.Data === types[2]) {
                this.setState({ three: '#ff66b3' }, () => {
                    this.setState({ one: 'rgba(241, 175, 213, 0.8)' }, () => {
                        this.setState({ two: 'rgba(241, 175, 213, 0.8)' }, () => {
                            this.setState({ four: 'rgba(241, 175, 213, 0.8)' })
                        })
                    })
                })
            } else if (this.state.Data === types[3]) {
                this.setState({ four: '#ff66b3' }, () => {
                    this.setState({ two: 'rgba(241, 175, 213, 0.8)' }, () => {
                        this.setState({ three: 'rgba(241, 175, 213, 0.8)' }, () => {
                            this.setState({ one: 'rgba(241, 175, 213, 0.8)' })
                        })
                    })
                })
            }
        })
    }

    // on = () => {
    //     if (validator.isEmpty(this.state.Data)) {
    //         alert('من فضلك اختار شيا')
    //     } else {
    //         
    //     }
    // }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../Photos/background.png')}>
                <View style={{ marginTop: 20 }} >
                    <StepperView currentPosition={6} />
                </View>
                <Text style={{ marginTop: 30, paddingRight: 20, color: 'white', fontSize: 20 }} >أنواع الزواج المعلن التي اقبل بيها</Text>
                <View>
                    <TouchableOpacity
                        style={{
                            height: 50, backgroundColor: this.state.one, margin: 8,
                            justifyContent: 'center', alignItems: 'center',
                            borderColor: 'white', borderWidth: 2,
                            borderRadius: 25
                        }}
                        onPress={() => { this.onHandel(types[0]) }}
                    >
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{types[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50, backgroundColor: this.state.two, margin: 8,
                            justifyContent: 'center', alignItems: 'center',
                            borderColor: 'white', borderWidth: 2,
                            borderRadius: 25
                        }}
                        onPress={() => { this.onHandel(types[1]) }}
                    >
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{types[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50, backgroundColor: this.state.three, margin: 8,
                            justifyContent: 'center', alignItems: 'center',
                            borderColor: 'white', borderWidth: 2,
                            borderRadius: 25
                        }}
                        onPress={() => { this.onHandel(types[2]) }}
                    >
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{types[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50, backgroundColor: this.state.four, margin: 8,
                            justifyContent: 'center', alignItems: 'center',
                            borderColor: 'white', borderWidth: 2,
                            borderRadius: 25
                        }}
                        onPress={() => { this.onHandel(types[3]) }}
                    >
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{types[3]}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center' }} >
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('SkinPreferences') }}
                        style={styles.nextButton}
                    >
                        <Image source={require('../../Photos/ic_nextx.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 40, paddingTop: 100 },
    backgroundContainer: {
        flex: 1,
    },
    emptyHeader: {
        height: '15%',
    },
    socialContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    nextButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EA85C1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selector: {

    }
})