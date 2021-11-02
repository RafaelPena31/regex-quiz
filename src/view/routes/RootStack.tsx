import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MainHallScreen from '../screens/hall/MainHallScreen'
import ProfileStack from './features/ProfileStack'
import QuestionStack from './features/QuestionStack'

export default function RootStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='MainHall' component={MainHallScreen} />
      <Screen name='Profile' component={ProfileStack} />
      <Screen name='Question' component={QuestionStack} />
    </Navigator>
  )
}
