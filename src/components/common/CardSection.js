import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const styleObject = {...styles.constainerStyle, ...props.style };
    return (
        <View style={styleObject}>
            {props.children}
        </View>
    );
};

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection;
