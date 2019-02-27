import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import PhotoCycle from './PhotoCycle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import PersonlaCar from '../../Styles/PersonlaCar'
const Dot = () => (
  <View style={styles.Dot} />
)
const PersonCard = (props) => (
  <View style={styles.mainContainer} >
    <View style={styles.firstRow} >
      <View style={{ alignSelf: 'center' }} >
        <Icon
          size={23}
          name='email'
          color='white'
          style={styles.Icon}
          onPress={props.onPress}
        />
      </View>
      <Text style={styles.message} >ارسال رسالة</Text>
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
const styles = StyleSheet.create(PersonlaCar);
export default PersonCard;