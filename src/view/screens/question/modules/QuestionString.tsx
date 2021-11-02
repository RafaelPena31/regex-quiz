import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../../../style/colors'

interface QuestionStringProps {
  answer: string | null
  setAnswer: (value: string) => void
}

export default function QuestionString({ answer, setAnswer }: QuestionStringProps) {
  return (
    <TextInput
      multiline
      numberOfLines={8}
      textAlignVertical='top'
      placeholder='Digite aqui...'
      onChangeText={setAnswer}
      value={answer ?? ''}
      style={styles.textArea}
    />
  )
}

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.neutral.inputBorder,
    padding: 16,
    marginTop: 16
  }
})
