import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IAlternative } from '../../../../data/services/server/question/QuestionTypes'
import { colors } from '../../../style/colors'

interface QuestionStringProps {
  alternative: IAlternative[]
  answer: string | null
  setAnswer: (value: string) => void
}

export default function QuestionString({ alternative, answer, setAnswer }: QuestionStringProps) {
  const getCurrentColor = (option: string) => {
    const isCorrect = option === answer
    return isCorrect ? colors.secondary.secondary1 : colors.secondary.secondary2
  }

  const isAllAlternativeAvailable = alternative.length === 4

  if (isAllAlternativeAvailable) {
    return (
      <View style={styles.container}>
        <View style={styles.booleanButtonStack}>
          <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(alternative[0].body)}>
            <View style={[styles.checkbox, { backgroundColor: getCurrentColor(alternative[0].body) }]} />
            <Text style={styles.booleanButtonText}>{alternative[0].body}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(alternative[1].body)}>
            <View style={[styles.checkbox, { backgroundColor: getCurrentColor(alternative[1].body) }]} />
            <Text style={styles.booleanButtonText}>{alternative[1].body}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.booleanButtonStack}>
          <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(alternative[2].body)}>
            <View style={[styles.checkbox, { backgroundColor: getCurrentColor(alternative[2].body) }]} />
            <Text style={styles.booleanButtonText}>{alternative[2].body}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.booleanButton} onPress={() => setAnswer(alternative[3].body)}>
            <View style={[styles.checkbox, { backgroundColor: getCurrentColor(alternative[3].body) }]} />
            <Text style={styles.booleanButtonText}>{alternative[3].body}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return <View />
}

const styles = StyleSheet.create({
  container: {},
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
    flexDirection: 'row'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary.secondary2,
    marginRight: 8
  },
  booleanButtonText: {
    flex: 1,
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  }
})
