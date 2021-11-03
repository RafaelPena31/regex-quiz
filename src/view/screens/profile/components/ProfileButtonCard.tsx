import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import images from '../../../assets/images'
import { colors } from '../../../style/colors'

interface ProfileButtonCardProps {
  text: string
  onPress: () => void
}

const { littleCompleteStudent } = images.hall

export default function ProfileButtonCard({ text, onPress }: ProfileButtonCardProps) {
  return (
    <TouchableOpacity style={styles.profileButtonCard} onPress={onPress}>
      <Image source={littleCompleteStudent} style={styles.littleStudentImage} />
      <Text style={styles.profileButtonCardText}>{text}</Text>

      <TouchableOpacity style={styles.buttonRedirect} onPress={onPress}>
        <Icon name='right' size={22} color={colors.text.default2} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profileButtonCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
    zIndex: 999
  },
  littleStudentImage: {
    width: 48,
    height: 44,
    marginTop: -8
  },
  profileButtonCardText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  },
  buttonRedirect: {
    width: 44,
    height: 44,
    backgroundColor: colors.secondary.secondary2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
