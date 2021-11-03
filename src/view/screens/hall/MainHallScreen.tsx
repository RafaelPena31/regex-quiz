import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { author_linkedin_url } from '../../../configs/constants'
import images from '../../assets/images'
import Button from '../../components/shared/buttons/Button'
import CardButton from '../../components/shared/buttons/CardButton'
import ChipItem from '../../components/shared/ChipItem'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import AboutModal from './components/AboutModal'

const { bigStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function MainHallScreen() {
  const { navigate } = useNavigation()
  const [aboutVisible, setAboutVisible] = useState(false)

  const onHandleNavigateProfile = useCallback(() => {
    navigate('Hall', {
      screen: 'Profile',
      params: {
        screen: 'ProfileInfo'
      }
    })
  }, [navigate])

  const onHandleNavigateTests = useCallback(() => {
    navigate('Question', {
      screen: 'QuestionHall'
    })
  }, [navigate])

  const onHandleNavigateStudies = useCallback(() => {
    navigate('Study', {
      screen: 'StudyHall'
    })
  }, [navigate])

  const onHandleChangeVisibleAboutModal = useCallback(() => {
    setAboutVisible(state => !state)
  }, [])

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.line}>
            <View>
              <Text style={styles.title}>Partiu aprender?</Text>
              <Text style={styles.subTitle}>Conteúdos interativos e atualizados</Text>
            </View>

            <View style={styles.subLine}>
              <Text style={styles.pointText}>1260</Text>
              <Icon style={styles.awardIcon} name='award' size={24} color={colors.text.default} />
            </View>
          </View>

          <View style={styles.chipContainer}>
            <ChipItem title='Regex' />
          </View>

          <View style={styles.topHeaderBottomContainer}>
            <Text style={styles.topHeaderLabel}>Clique em uma das opções abaixo entre “Aprender” e “Desafios”</Text>

            <View style={styles.topHeaderBottomButtonContainer}>
              <Button text='Aprender' fontSize={14} width='48%' height={36} onPress={onHandleNavigateStudies} />
              <Button text='Desafios' fontSize={14} width='48%' height={36} onPress={onHandleNavigateTests} />
            </View>
          </View>

          <Image source={bigStudent} style={styles.bigStudentImage} />
        </View>
        <View style={styles.bottomTopHeader}>
          <View style={styles.modalBottomBar} />
        </View>

        <View style={styles.cardOptionStack}>
          <CardButton title='Estudo' dark onPress={onHandleNavigateStudies} />
          <CardButton title='Perfil' onPress={onHandleNavigateProfile} />
          <CardButton title='Testes' onPress={onHandleNavigateTests} />
          <CardButton title='Sobre' dark onPress={onHandleChangeVisibleAboutModal} />
        </View>

        <AboutModal url={author_linkedin_url} visible={aboutVisible} setVisible={onHandleChangeVisibleAboutModal} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    minHeight: currentHeight
  },
  topHeader: {
    position: 'relative',
    height: 230,
    backgroundColor: colors.secondary.secondary2,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  bottomTopHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary.secondary2,
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
  line: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subLine: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    lineHeight: 30,
    color: colors.text.default
  },
  subTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    lineHeight: 13,
    color: colors.text.default3
  },
  pointText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.text.default,
    marginRight: 12
  },
  awardIcon: {
    marginTop: 4
  },
  chipContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  topHeaderBottomContainer: {
    position: 'absolute',
    maxWidth: '81%',
    bottom: 6,
    left: 16
  },
  topHeaderLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.default2,
    textAlign: 'right'
  },
  topHeaderBottomButtonContainer: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bigStudentImage: {
    position: 'absolute',
    bottom: -20,
    right: 0
  },
  cardOptionStack: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})
