import React from 'react'
import { KeyboardType, StyleSheet, Text, TextInput, View } from 'react-native'

interface TextInputProps {
  label: string

  keyboardType?: KeyboardType
  value: string
  setValue: (value: string) => void
}

export default function Input({ label, keyboardType = 'default', value, setValue }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} keyboardType={keyboardType} value={value} onChangeText={setValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  label: {
    color: '#ffffff'
  },
  input: {
    width: '100%',
    height: 50,
    paddingLeft: 12,
    backgroundColor: '#fefefe',
    marginVertical: 10,
    borderRadius: 8
  }
})
