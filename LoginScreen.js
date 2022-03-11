import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Segment from 'expo-analytics-segment'

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
          Segment.identifyWithTraits('kaixuan', {
            name: 'Kai Xuan Tan',
          })
        }}
      >
        <Text style={styles.text}>Click Here to Login!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
