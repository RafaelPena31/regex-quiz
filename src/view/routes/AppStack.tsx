import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SplashScreen from '../screens/SplashScreen'

export default function AppStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='Splash' component={SplashScreen} />
    </Navigator>
  )
}
