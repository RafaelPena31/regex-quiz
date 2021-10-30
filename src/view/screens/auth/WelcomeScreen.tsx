import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import images from '../../assets/images'
import Button from '../../components/shared/Button'
import { colors } from '../../style/colors'

const { welcome, logo } = images
const { gallery } = welcome
const { defaultLogo } = logo

export default function WelcomeScreen() {
  const { navigate } = useNavigation()

  const onPressCreateAccount = () => navigate('SignUp')
  const onPressLoginAccount = () => navigate('SignIn')

  const TRANSPARENT_WHITE_COLORS_GRADIENT = ['#ffffff00', '#ffffff']
  const LOCATION_CONTROL_GRADIENT = [0.53, 1]

  return (
    <View style={styles.container}>
      <Image source={gallery} style={styles.gallery} />
      <LinearGradient colors={TRANSPARENT_WHITE_COLORS_GRADIENT} locations={LOCATION_CONTROL_GRADIENT} style={styles.gradient} />
      <View style={styles.content}>
        <Image source={defaultLogo} style={styles.logo} />
        <Text style={styles.text}>Aprenda como nunca antes</Text>

        <View style={styles.buttonStack}>
          <Button text='Crie sua conta' onPress={onPressCreateAccount} />
          <Button text='Entre agora' light onPress={onPressLoginAccount} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: colors.secondary.secondary2,
    paddingTop: 8,
    alignItems: 'center'
  },
  gallery: {},
  logo: {
    marginBottom: 12
  },
  gradient: {
    position: 'absolute',
    top: 0,
    height: '65%',
    width: '100%'
  },
  content: {
    width: '100%',
    height: '36.15%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 8
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    color: colors.text.default
  },
  buttonStack: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
