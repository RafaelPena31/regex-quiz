import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../style/colors'

interface QuestionBooleanProps {
  answer: boolean | null
  setAnswer: (value: boolean) => void
}

export default function QuestionBoolean({ answer, setAnswer }: QuestionBooleanProps) {
  const getCurrentColor = (buttonValue: boolean) => {
    if (answer) {
      return buttonValue ? colors.secondary.secondary1 : colors.secondary.secondary2
    } else if (answer !== null) {
      return buttonValue ? colors.secondary.secondary2 : colors.secondary.secondary1
    }
    return colors.secondary.secondary2
  }

  return (
    <View style={styles.booleanButtonStack}>
      <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(true)}>
        <View style={[styles.checkbox, { backgroundColor: getCurrentColor(true) }]} />
        <Text style={styles.booleanButtonText}>Verdadeiro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(false)}>
        <View style={[styles.checkbox, { backgroundColor: getCurrentColor(false) }]} />
        <Text style={styles.booleanButtonText}>Falso</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  booleanButtonStack: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  booleanButton: {
    position: 'relative',
    padding: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: colors.neutral.inputBorder,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkbox: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary.secondary2,
    marginRight: 24
  },
  booleanButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  }
})
