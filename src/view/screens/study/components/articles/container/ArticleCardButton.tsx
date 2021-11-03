import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { articleColors } from '../../../../../style/colors'

interface ArticleCardButtonProps {
  randomId: number
  title: string
  description: string
  author: string
  onPress: () => void
}

export default function ArticleCardButton({ randomId, title, description, author, onPress }: ArticleCardButtonProps) {
  const selectedColor = articleColors[randomId]

  const getText = (text: string) => {
    if (text.length > 22) {
      return `${text.substring(0, 22)}...`
    }
    return text
  }

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: selectedColor }]} onPress={onPress}>
      <Text style={styles.title}>{getText(title)}</Text>
      <Text style={styles.text}>{getText(description)}</Text>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginLeft: 16,
    padding: 16,
    borderRadius: 16,
    width: 180,
    height: 180
  },
  title: {
    maxWidth: '80%',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    marginBottom: 8
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF'
  },
  author: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16
  }
})
