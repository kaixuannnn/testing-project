import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import * as Segment from 'expo-analytics-segment'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          Segment.trackWithProperties('TrackHomeData', {
            dummy: 'hhhihihihihihi',
          })
        }}
      >
        <Text>Click Here to Track DATA</Text>
      </TouchableHighlight>
      <Text>RegisterScreen</Text>
      <TouchableHighlight
        onPress={() => {
          Segment.reset()
          navigation.goBack()
        }}
      >
        <Text>Click Here to Logout</Text>
      </TouchableHighlight>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
