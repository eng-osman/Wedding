import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonlaCar from '../../Styles/PersonlaCar';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
const Dot = () => (
    <View style={styles.Dot} />
)

const Profile = (props) => (
    <View style={styles.mainContainer} >
        <View style={styles.location}>
            <Text style={{ marginRight: 10, color: 'white', fontSize: 20, textAlign: 'right' }} >{props.location}</Text>
            <LocationIcon
                name='location-on'
                size={25}
                color='white'
                style={{ marginRight: 20 }}
            />
        </View>
        <View style={styles.thirdRow}>
            <View  >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        الطول: {props.height} سم
          </Text>
                    <Dot />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        الوزن: {props.weight} كج
          </Text>
                    <Dot />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        لون البشرة: {props.color}
                    </Text>
                    <Dot />
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        الديانة: {props.religans}
                    </Text>
                    <Dot />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        السن: {props.age}
                    </Text>
                    <Dot />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                    <Text style={{ marginRight: 5 }} >
                        الحالة: {props.status}
                    </Text>
                    <Dot />
                </View>
            </View>
        </View>
    </View>
)
const styles = StyleSheet.create(PersonlaCar)
export default Profile
