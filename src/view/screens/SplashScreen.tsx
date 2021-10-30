import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import images from '../assets/images'
import { colors } from '../style/colors'

const { horizontalLogo } = images.logo

export default function SplashScreen() {
  const { navigate } = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigate('Auth', {
        screen: 'Welcome'
      })
    }, 1500)
  }, [navigate])

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
