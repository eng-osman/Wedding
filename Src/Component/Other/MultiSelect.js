import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Fonts } from "../../Fonts/Fonts";

class OneRowForMultiSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'rgba(217, 217, 217, 0.3)'
        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.state.color == 'rgba(217, 217, 217, 0.3)' ? this.setState({ color: 'rgba(255, 128, 179, 1)' }) : this.setState({ color: 'rgba(217, 217, 217, 0.3)' })
                    this.props.onPress()
                }}
                style={[oneRowForMultiSelector.TouchableOpacity, { backgroundColor: this.state.color }]}
            >
                <Text style={oneRowForMultiSelector.Text} >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}
//''
const MultiSelector = (props) => (
    <View>
        <Text style={multiSelector.Text} > {props.title}</Text>
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.data}
            renderItem={({ item }) => <OneRowForMultiSelector
                title={item}
                onPress={() => props.onChose(item)}
            />}
        />
    </View>
)
const oneRowForMultiSelector = StyleSheet.create({
    TouchableOpacity: {
        height: 50,
        justifyContent: 'center', alignItems: 'center',
        borderColor: 'white', borderWidth: 1,
        borderRadius: 25,
        marginVertical: 10,
        flex: 1
    },
    Text: { fontSize: 12, color: 'white', fontFamily: Fonts.BlueOcean }
})
const multiSelector = StyleSheet.create({
    Text: { fontSize: 12, color: 'white', marginVertical: 10, fontFamily: Fonts.BlueOcean }
})
export default MultiSelector