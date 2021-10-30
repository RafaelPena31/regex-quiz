import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../style/colors'

interface ButtonProps {
  text: string
  light?: boolean
  onPress: () => void
}

export default function Button({ text, light, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, light ? styles.light : styles.default]}>
      <Text style={[styles.text, light ? styles.textLight : styles.textDefault]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
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
