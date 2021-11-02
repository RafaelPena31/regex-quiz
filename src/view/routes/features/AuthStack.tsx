import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignInScreen from '../../screens/auth/SignInScreen'
import SignUpScreen from '../../screens/auth/SignUpScreen'
import WelcomeScreen from '../../screens/auth/WelcomeScreen'

export default function AuthStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='Welcome' component={WelcomeScreen} />
      <Screen name='SignIn' component={SignInScreen} />
      <Screen name='SignUp' component={SignUpScreen} />
    </Navigator>
  )
}
