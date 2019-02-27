import React from "react";
import { FlatList, View } from "react-native";
import CustomPicker from "../Native/CustomPicker";

const MoreCutomePickers = props => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item, inex) => inex.toString()}
        data={props.data}
        renderItem={({ item }) => (
          <CustomPicker
            containerStyle={{ marginBottom: 20 }}
            title={item.title}
            size={1}
            placeholder={item.placeholder}
            onPickerCancel={() =>item.onPickerCancel()}
            onPickerSelect={(e) => { item.onPickerSelect(e).bind(this) }}
            onPickerConfirm={()=> item.onPickerConfirm()}
            data={item.data}
          />
        )}
      />
    </View>
  );
};
export default MoreCutomePickers;
