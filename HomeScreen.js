import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import * as Segment from 'expo-analytics-segment'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = {
  en: { clickHere: 'Click Here', name: 'TanKaiXuan' },
  zh: { clickHere: 'ZheLi' },
}

i18n.locale = Localization.locale

i18n.fallbacks = true

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
        <Text>
          {i18n.t('clickHere')} {i18n.t('name')}
        </Text>
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
