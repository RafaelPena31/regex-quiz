import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AboutScreen from '../screens/about/AboutScreen'
import MainHallScreen from '../screens/hall/MainHallScreen'
import ProfileStack from './features/ProfileStack'
import QuestionStack from './features/QuestionStack'
import StudyStack from './features/StudyStack'

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
      <Screen name='Study' component={StudyStack} />
      <Screen name='About' component={AboutScreen} />
    </Navigator>
  )
}
