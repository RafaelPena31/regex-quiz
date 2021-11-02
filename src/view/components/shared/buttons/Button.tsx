import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../style/colors'

interface ButtonProps {
  text: string
  width?: string
  height?: number
  marginRight?: number
  fontSize?: number
  light?: boolean
  onPress: () => void
}

export default function Button({ text, width = '100%', height = 50, fontSize = 16, marginRight = 0, light, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[{ width, height, marginRight }, styles.button, light ? styles.light : styles.default]}>
      <Text style={[{ fontSize }, styles.text, light ? styles.textLight : styles.textDefault]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
    textAlign: 'center'
  },
  light: {
    borderWidth: 1,
    borderColor: colors.neutral.border
  },
  textLight: {
    color: colors.text.default2
  },
  default: {
    backgroundColor: colors.secondary.secondary1
  },
  textDefault: {
    color: '#FFFFFF'
  }
})
