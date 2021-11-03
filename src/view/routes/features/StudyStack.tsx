import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import StudyArticleScreen from '../../screens/study/StudyArticleScreen'
import StudyHallScreen from '../../screens/study/StudyHallScreen'
import StudyListScreen from '../../screens/study/StudyListScreen'

export default function StudyStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='StudyHall' component={StudyHallScreen} />
      <Screen name='StudyList' component={StudyListScreen} />
      <Screen name='StudyArticle' component={StudyArticleScreen} />
    </Navigator>
  )
}
