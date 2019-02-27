import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import PhotoCycle from './PhotoCycle';
import Icon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';

const Dot = () => (
  <View style={styles.Dot} />
)
const PersonCardFav = (props) => (
  <View style={styles.mainContainer} >
    <View style={styles.firstRow} >
      <View style={{ alignSelf: 'center',  }} >
      <View style={{ position: 'absolute', top: -30 }} >
        <Icon
          size={25}
          name='heart'
          color='#de0012'
          style={styles.Icon}
        />
        </View>
      </View>
      <PhotoCycle
        image={props.image}
        Name={props.Name}
        isConnected={props.isConnected}
      />
    </View>
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
const styles = StyleSheet.create({
  Dot: { backgroundColor: '#16f1bb', width: 10, height: 10, borderRadius: 10, alignSelf: 'center' },
  mainContainer: { marginHorizontal: 10, paddingBottom: 20, borderRadius: 30, backgroundColor: 'white', marginVertical: 10 },
  firstRow: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25, marginLeft: 20 },
  Icon: {  backgroundColor: 'white', width: 40, height: 40, borderRadius: 40, textAlign: 'center', textAlignVertical: 'center' },
  message: { paddingTop: 5, position: 'absolute', top: 60, left: -10 },
  location: { alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#21e7b6', marginTop: 10, height: 40 },
  thirdRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginLeft: 100 }
});
export default PersonCardFav;