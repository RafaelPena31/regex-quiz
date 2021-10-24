import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface TextInputProps {
  label: string

  value: string
  setValue: (value: string) => void
}

export default function Input({ label, value, setValue }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  input: {}
})
