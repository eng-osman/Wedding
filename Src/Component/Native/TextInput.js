import React from 'react';
import { TextInput } from 'react-native';

const TextBox = ({
    style,
    placeholderStyle,
    value,
    ...rest
}) => (
        <TextInput
            {...rest}
            style={!value ? [style, placeholderStyle] : style}
        />
    );
export default TextBox;