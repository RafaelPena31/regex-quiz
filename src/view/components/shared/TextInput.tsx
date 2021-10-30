import React from 'react'
import { KeyboardType, StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../../style/colors'

interface TextInputProps {
  secureTextEntry?: boolean
  placeholder?: string

  keyboardType?: KeyboardType
  value: string
  setValue: (value: string) => void
}

export default function Input({ secureTextEntry, placeholder = '', keyboardType = 'default', value, setValue }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
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
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral.inputBorder
  }
})
