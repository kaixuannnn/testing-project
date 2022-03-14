import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

const IovationWebView = ({
  iovationReloadKey = 0,
  uri = 'https://iovation-test.deploybuild.com/login.html',
}) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        key={0}
        source={{ uri }}
        javaScriptEnabled
        domStorageEnabled
        thirdPartyCookiesEnabled
        androidHardwareAccelerationDisabled
      />
    </View>
  )
}

export default IovationWebView

const styles = StyleSheet.create({})
