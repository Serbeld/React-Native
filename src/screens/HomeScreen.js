import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}>HomeScreen</Text>
            <Text style={{ color: "white" }}></Text>
            <Button style={{ color: "white" }} onPress={() => { goToPage("Settings") }} title="Go To Settings" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020914',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});