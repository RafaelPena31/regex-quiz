import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProfileInfoScreen from '../../screens/profile/ProfileInfoScreen'
import UpdateProfileInfoScreen from '../../screens/profile/UpdateProfileInfoScreen'

export default function ProfileStack() {
  const { Navigator, Screen } = createStackNavigator()
  const screenOptions = {
    headerShown: false
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='ProfileInfo' component={ProfileInfoScreen} />
      <Screen name='UpdateProfileInfo' component={UpdateProfileInfoScreen} />
    </Navigator>
  )
}
