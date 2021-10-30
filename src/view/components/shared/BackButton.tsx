import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../style/colors'

interface BackButtonProps {
  onPress: () => void
}

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name='chevron-left' size={23} color={colors.text.default2} />
    </TouchableOpacity>
  )
}
