import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: ""
        }
    }

    checkCredentials() {
        return this.state.username === "test" && this.state.password === "test";
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={text => this.setState({username: text})} style={styles.input} placeholder="Username"/>
                <TextInput secureTextEntry={true} onChangeText={text => this.setState({password: text})} style={styles.input} placeholder="Password"/>
                <Button style={styles.button} title="Test" onPress={() => {
                    console.log("Navigate to Home", this.state.username, this.state.password);
                    if (this.checkCredentials())
                        this.props.navigation.navigate("Home", {username: this.state.username, password: this.state.password})
                }}/>
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
    input: {
        margin: 10,
        width: 300,
        height: 40
    },
    button: {
        height: 40,
        width: 150,
    }
});
