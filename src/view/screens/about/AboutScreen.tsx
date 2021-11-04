import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { author_linkedin_url, back_linkedin_url, infra_linkedin_url } from '../../../configs/constants'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import ProfileButtonCard from '../profile/components/ProfileButtonCard'
import AboutModal from './components/AboutModal'

const { standStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function AboutScreen() {
  const { goBack } = useNavigation()
  const [RPVisible, setRPVisible] = useState(false)
  const [FRVisible, setFRVisible] = useState(false)
  const [PSVisible, setPSVisible] = useState(false)

  const onHandleOpenRPModal = () => setRPVisible(state => !state)
  const onHandleOpenFRModal = () => setFRVisible(state => !state)
  const onHandleOpenPSModal = () => setPSVisible(state => !state)

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topHeader}>
            <BackButton onPress={goBack} />
          </View>

          <View style={styles.content}>
            <ProfileButtonCard text='Rafael Augusto Pena' onPress={onHandleOpenRPModal} />
            <ProfileButtonCard text='Pedro Henrique Souza' onPress={onHandleOpenPSModal} />
            <ProfileButtonCard text='Fernando Rodrigues' onPress={onHandleOpenFRModal} />
          </View>

          <Image style={styles.studentImage} source={standStudent} />
          <AboutModal
            name='Rafael Augusto Pena'
            role='FrontEnd Software Engineer - Mobile | Web'
            url={author_linkedin_url}
            visible={RPVisible}
            setVisible={onHandleOpenRPModal}
          />
          <AboutModal
            name='Fernando Rodrigues'
            role='Devops Software Engineer'
            url={infra_linkedin_url}
            visible={FRVisible}
            setVisible={onHandleOpenFRModal}
          />
          <AboutModal
            name='Pedro Souza'
            role='Backend Software Engineer'
            url={back_linkedin_url}
            visible={PSVisible}
            setVisible={onHandleOpenPSModal}
          />
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
    paddingVertical: 16,
    paddingHorizontal: 16
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
  }
})
