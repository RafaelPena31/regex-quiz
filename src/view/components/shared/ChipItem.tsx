import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../style/colors'

interface ChipItemProps {
  title: string
}

export default function ChipItem({ title }: ChipItemProps) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chip: {
    marginVertical: 12,
    paddingHorizontal: 24,
    paddingVertical: 2,
    backgroundColor: colors.secondary.secondary1,
    borderRadius: 18
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#FFFFFF'
  }
})
