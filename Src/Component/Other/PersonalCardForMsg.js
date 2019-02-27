import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PhotoCycle from './PhotoCycle';
//import LocationIcon from 'react-native-vector-icons/MaterialIcons';
//import t from '../assets/t.jpg';

// const {
//   // id,
//    name,
//    photoUrl,
//    location,
//    isConnected,
//    personalInfo
//  } = this.props.person;
//  const {
//    maritalStatus,
//    religious,
//    skinColor,
//    weight,
//    height,
//    age
//  } = personalInfo;
const PersonalCardForMsg = (props) => (
    <View style={styles.mainContainer} >
        <View >
            <Text style={styles.time} >منذ {props.time}</Text>
            <PhotoCycle
                image={props.image}
                Name={props.Name}
                isConnected={props.isConnected}
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
            <Text style={styles.Message}>{props.msg}</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    mainContainer: { paddingHorizontal: 20, justifyContent: 'flex-end', marginHorizontal: 10, paddingBottom: 10, borderRadius: 25, backgroundColor: 'white', marginVertical: 10 },
    time: { paddingTop: 10, position: 'absolute', left: 10, top: 15, color: '#40d8af' },
    Message: { flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10, fontSize: 15, fontWeight: '600', paddingRight: 5, color: '#4b4b4b' }
});
export default PersonalCardForMsg;