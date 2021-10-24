import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../style/colors'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RG</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  title: {}
})
