import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native'

export default class StepperView extends Component{
      
    render(){
        const {currentPosition} = this.props
        return (
            <View style={styles.container}>
               <View style={styles.line}/>
                 {[1,2,3,4,5,6,7,8,9].map((item,index)=>{    
                     return (<View  key={index} style={[ item != currentPosition? styles.step: styles.thisStep, item <= currentPosition?styles.scaleStep:undefined]} />)
                 })}   
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
   },
   line:{
    position:'absolute',
    left:0,
    right:0,
    height:3,
    backgroundColor:'gray',
    alignSelf: 'center',
   },
    step:{
        backgroundColor:'white',
        borderRadius: 6,
        width:12,
        height:12,
        zIndex:1,
    },
    thisStep: {
        backgroundColor:'#d9d9d9',
        borderRadius: 6,
        width:12,
        height:12,
        zIndex:1,
    },
    scaleStep:{
        transform:[{scaleX:2},{scaleY:2}],
    }

})