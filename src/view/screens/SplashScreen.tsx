import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../style/colors'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(.*)</Text>
      <Text style={styles.logo}>RegEx</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24
  },
  title: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 48,
    color: colors.primary2
  },
  logo: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 48,
    color: colors.primary
  }
})
