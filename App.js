import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import * as Segment from 'expo-analytics-segment'
import { useState } from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
  Segment.initialize({
    iosWriteKey: 't3XCHGLKz5C4kv3WdOnFAyaCYx5XB5vM',
    trackAppLifecycleEvents: true,
  })
  const [routeName, setRouteName] = useState('Unknown')

  const getActiveRouteName = (state) => {
    if (!state || typeof state.index !== 'number') {
      return 'Unknown'
    }

    const route = state.routes[state.index]

    if (route.state) {
      return getActiveRouteName(route.state)
    }

    return route.name
  }
  return (
    <NavigationContainer
      onStateChange={(state) => {
        const newRouteName = getActiveRouteName(state)

        if (routeName !== newRouteName) {
          Segment.screen(newRouteName)
          setRouteName(newRouteName)
        }
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
