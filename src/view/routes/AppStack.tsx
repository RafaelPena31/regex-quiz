import auth from '@react-native-firebase/auth'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import SplashScreen from '../screens/SplashScreen'
import AuthStack from './features/AuthStack'
import RootStack from './RootStack'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
  const [isAuth, setIsAuth] = useState(false)
  const screenOptions = {
    headerShown: false
  }

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
  }, [])

  return (
    <Navigator screenOptions={screenOptions}>
      {isAuth ? (
        <Screen name='Hall' component={RootStack} />
      ) : (
        <>
          <Screen name='Splash' component={SplashScreen} />
          <Screen name='Auth' component={AuthStack} />
        </>
      )}
    </Navigator>
  )
}
