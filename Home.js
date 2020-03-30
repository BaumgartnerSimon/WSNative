import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TextInput placeholder="Test"/>
                <Button title="Test" onPress={() => console.log("Test")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
