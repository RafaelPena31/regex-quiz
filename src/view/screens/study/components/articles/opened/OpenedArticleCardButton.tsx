import moment from 'moment'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import images from '../../../../../assets/images'
import { colors } from '../../../../../style/colors'

const { profilePic } = images

interface OpenedArticleCardButtonProps {
  author: string
  title: string
  date: string
  coverLink?: string
  onPress: () => void
}

function OpenedArticleCardButton({ author, title, date, coverLink, onPress }: OpenedArticleCardButtonProps) {
  const [isImageAvailable, setIsImageAvailable] = useState(!!coverLink)

  const getIconText = () => {
    return `${author[0]}${author[author.length - 1]}`
  }

  const getTitleText = () => {
    if (title.length < 54) {
      return `${title}`
    }
    return `${title.substring(0, 53)}`
  }

  const getPublishDate = () => {
    return moment(date).format('DD/MM/YYYY')
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.leftColumn}>
          <View style={styles.header}>
            <View style={styles.authorIcon}>
              <Text style={styles.authorIconText}>{getIconText()}</Text>
            </View>

            <Text style={styles.authorTitle}>{author}</Text>
          </View>

          <Text style={styles.title}>{getTitleText()}...</Text>
        </View>

        {isImageAvailable ? (
          <Image
            style={styles.image}
            source={{
              uri: coverLink,
              width: 105,
              height: 105
            }}
            onError={() => setIsImageAvailable(false)}
          />
        ) : (
          <Image style={styles.image} source={profilePic} />
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerDate}>{getPublishDate()}</Text>
        <TouchableOpacity>
          <Icon name='ellipsis1' size={30} color={colors.text.default2} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const MemoizedOpenedArticleCardButton = React.memo(OpenedArticleCardButton)

export default MemoizedOpenedArticleCardButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary.secondary2,
    borderWidth: 2,
    borderColor: colors.text.default5,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftColumn: {
    maxWidth: '65%',
    marginRight: 8
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  authorIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.primary3,
    borderRadius: 14,
    marginRight: 8
  },
  authorIconText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  authorTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    lineHeight: 24,
    color: colors.text.default
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 8
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  footerDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: colors.text.default2
  },
  icon: {
    marginBottom: -8
  }
})
