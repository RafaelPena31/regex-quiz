import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import images from '../assets/images'
import { colors } from '../style/colors'

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.profilePic} />
        <Text style={styles.imageTitle}>
          {' '}
          Aluno há <Text style={styles.monthTitle}>6</Text> meses
        </Text>
      </View>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>David</Text>
        <Text style={styles.studentSecondName}>Clerisseau</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <Image style={styles.actionPic} source={images.profilePic} />
          <Text style={styles.actionText}>Goals</Text>
          <TouchableHighlight style={styles.actionNextButton}>
            <Text style={styles.actionButtonText}>{'>'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.actionItem}>
          <Image style={styles.actionPic} source={images.profilePic} />
          <Text style={styles.actionText}>Goals</Text>
          <TouchableHighlight style={styles.actionNextButton}>
            <Text style={styles.actionButtonText}>{'>'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.actionItem}>
          <Image style={styles.actionPic} source={images.profilePic} />
          <Text style={styles.actionText}>Goals</Text>
          <TouchableHighlight style={styles.actionNextButton}>
            <Text style={styles.actionButtonText}>{'>'}</Text>
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight style={styles.changeProfile}>
        <Text style={styles.changeProfileText}>Sign out</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageTitle: {},
  monthTitle: {
    fontWeight: '900'
  },
  studentInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 56
  },
  studentName: {
    fontSize: 40,
    fontFamily: 'Poppins-Medium'
  },
  studentSecondName: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium'
  },
  actions: {
    justifyContent: 'center',
    marginTop: 48
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 24
  },
  actionPic: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  actionText: {
    fontSize: 20,
    fontFamily: 'Poppins'
  },
  actionNextButton: {
    borderRadius: 16,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48
  },
  actionButtonText: { fontSize: 24, fontFamily: 'Poppins-Light' },
  changeProfile: {
    borderRadius: 16,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 48,

    margin: 48
  },
  changeProfileText: {
    fontFamily: 'Poppins-Medium'
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64
  }
})
