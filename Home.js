import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.navigation.state.params.username,
            password: props.navigation.state.params.password
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome {this.state.username}</Text>
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
