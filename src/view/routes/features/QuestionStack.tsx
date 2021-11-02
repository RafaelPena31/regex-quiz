import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import QuestionChallengerScreen from '../../screens/question/QuestionChallengerScreen'
import QuestionHallScreen from '../../screens/question/QuestionHallScreen'
import QuestionResultScreen from '../../screens/question/QuestionResultScreen'

export default function QuestionStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='QuestionHall' component={QuestionHallScreen} />
      <Screen name='QuestionChallenger' component={QuestionChallengerScreen} />
      <Screen name='QuestionResult' component={QuestionResultScreen} />
    </Navigator>
  )
}
