import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignInScreen from '../screens/SignInScreen'

export default function AppStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='SignIn' component={SignInScreen} />
    </Navigator>
  )
}
