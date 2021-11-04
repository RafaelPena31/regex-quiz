import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { author_linkedin_url, back_linkedin_url, infra_linkedin_url } from '../../../configs/constants'
import { useGetScore, useUserName } from '../../../domain/hooks/UserHook'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import ProfileButtonCard from '../profile/components/ProfileButtonCard'
import AboutModal from './components/AboutModal'

const { standStudent, littleCompleteStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function AboutScreen() {
  const { goBack } = useNavigation()
  const [RPVisible, setRPVisible] = useState(false)
  const [FRVisible, setFRVisible] = useState(false)
  const [PSVisible, setPSVisible] = useState(false)

  const userName = useUserName()
  const userScore = useGetScore()

  const getName = (text?: string | null) => {
    if (text) {
      if (text.length <= 20) return text
      return `${text.substring(0, 21)}...`
    }
    return ''
  }

  const onHandleOpenRPModal = () => setRPVisible(state => !state)
  const onHandleOpenFRModal = () => setFRVisible(state => !state)
  const onHandleOpenPSModal = () => setPSVisible(state => !state)

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topHeader}>
            <BackButton onPress={goBack} />

            <Image source={littleCompleteStudent} style={styles.profileImage} />

            <Text style={styles.label}>
              Aluno há <Text style={styles.bold}>6</Text> meses
            </Text>

            <View style={styles.line}>
              <Text style={styles.name}>{getName(userName)}</Text>

              <View style={styles.pointContainer}>
                <Icon name='award' size={24} color={colors.text.default} />
                <Text style={styles.pointTitle}>Pontos:</Text>
                <Text style={styles.pointText}>{userScore}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomTopHeader}>
            <View style={styles.modalBottomBar} />
          </View>

          <View style={styles.content}>
            <ProfileButtonCard text='Rafael Augusto Pena' onPress={onHandleOpenRPModal} />
            <ProfileButtonCard text='Pedro Henrique Souza' onPress={onHandleOpenPSModal} />
            <ProfileButtonCard text='Fernando Rodrigues' onPress={onHandleOpenFRModal} />
          </View>

          <Image style={styles.studentImage} source={standStudent} />
          <AboutModal url={author_linkedin_url} visible={RPVisible} setVisible={onHandleOpenRPModal} />
          <AboutModal url={infra_linkedin_url} visible={FRVisible} setVisible={onHandleOpenFRModal} />
          <AboutModal url={back_linkedin_url} visible={PSVisible} setVisible={onHandleOpenPSModal} />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.secondary2,
    minHeight: currentHeight
  },
  topHeader: {
    position: 'relative',
    height: 230,
    backgroundColor: colors.background,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  profileImage: {
    width: 135,
    height: 135,
    borderRadius: 67.5,
    marginTop: 30,
    borderWidth: 1,
    borderColor: colors.neutral.border
  },
  label: {
    position: 'absolute',
    right: 16,
    top: 22,
    fontFamily: 'Inter-Regular ',
    fontSize: 12,
    lineHeight: 16,
    color: colors.text.default
  },
  bold: {
    fontFamily: 'Inter-SemiBold'
  },
  line: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    right: 16,
    alignItems: 'flex-end'
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  pointTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  },
  pointText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default,
    marginLeft: 4
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 36,
    lineHeight: 40,
    textAlign: 'right',
    color: colors.text.default,
    maxWidth: '50%'
  },
  bottomTopHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    height: 20,
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18
  },
  modalBottomBar: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.default
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  studentImage: {
    position: 'absolute',
    right: 0,
    bottom: 20,
    height: 220,
    width: 120
  },
  signOutButton: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    backgroundColor: colors.red,
    paddingHorizontal: 36,
    paddingVertical: 6,
    borderRadius: 6
  },
  signOutButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF'
  }
})
