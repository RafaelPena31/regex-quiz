import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../../assets/images'
import { colors } from '../../../style/colors'

interface CardButtonProps {
  dark?: boolean
  title: string
  text?: string
  onPress: () => void
}

const { littleStudent } = images.hall

export default function CardButton({ dark, text = 'Acessar', title, onPress }: CardButtonProps) {
  return (
    <TouchableOpacity style={[styles.cardContent, dark ? styles.cardContentDark : styles.cardContentLight]} onPress={onPress}>
      <View>
        <Text style={[styles.cardContentTitle, dark ? styles.cardContentTextDark : styles.cardContentTextLight]}>{title}</Text>
        <Text style={[styles.cardContentSubTitle, dark ? styles.cardContentTextDark : styles.cardContentTextLight]}>{text}</Text>
      </View>
      <Image source={littleStudent} style={styles.littleStudent} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    position: 'relative',
    width: '48%',
    height: 95,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  cardContentLight: {
    backgroundColor: colors.secondary.secondary2
  },
  cardContentDark: {
    backgroundColor: colors.neutral.neutral
  },
  cardContentTextLight: {
    color: colors.text.default
  },
  cardContentTextDark: {
    color: '#FFFFFF'
  },
  littleStudent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 20
  },
  cardContentTitle: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    lineHeight: 30
  },
  cardContentSubTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 20
  }
})
