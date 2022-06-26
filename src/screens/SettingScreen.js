import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function SettingScreen() {

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>SettingScreen</Text>
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