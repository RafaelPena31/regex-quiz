import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { UserAuthentication } from '../../domain/hooks/UserHook'
import images from '../assets/images'
import { colors } from '../style/colors'

const { horizontalLogo } = images.logo

export default function SplashScreen() {
  const { navigate } = useNavigation()
  const isAuthenticated = UserAuthentication()

  const onHandleNavigateAuthStack = useCallback(
    () =>
      navigate('Auth', {
        screen: 'Welcome'
      }),
    [navigate]
  )

  useEffect(() => {
    if (!isAuthenticated) {
      onHandleNavigateAuthStack()
    }
  }, [isAuthenticated, onHandleNavigateAuthStack])

  return (
    <View style={styles.container}>
      <Image source={horizontalLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.secondary2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
