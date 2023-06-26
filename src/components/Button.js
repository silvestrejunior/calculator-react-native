import React from "react";
import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        borderColor: '#888',
        backgroundColor: '#f0f0f0',
        borderWidth: 1
    },
    operationButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231'
    },
    resultButton: {
        color: '#ffffff',
        backgroundColor: '#FE6566'
    },
    dobleButton: {
        color: '#ffffff',
        backgroundColor: 'blue',
        width: Dimensions.get('window').width / 2,
    },
    eraseButton: {
        backgroundColor: '#dedede',
        width: Dimensions.get('window').width / 2,
    }
})

export default props =>  {
    const styleButton = [styles.button]
    if(props.operation) styleButton.push(styles.operationButton)
    if(props.result) styleButton.push(styles.resultButton)
    if(props.duble) styleButton.push(styles.dobleButton)
    if(props.erase) styleButton.push(styles.eraseButton)
    return(
        <TouchableHighlight onPress={props.onClick}>
             <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}