import Auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { useUserName } from '../../../domain/hooks/UserHook'
import { ResetOpenedArticle } from '../../../domain/redux/ArticleStore'
import { ResetAnswer, ResetQuestion } from '../../../domain/redux/QuestionStore'
import { ResetUser } from '../../../domain/redux/UserStore'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import ProfileButtonCard from './components/ProfileButtonCard'

const { standStudent, littleCompleteStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function ProfileInfoScreen() {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()
  const userName = useUserName()

  const getName = (text?: string | null) => {
    if (text) {
      if (text.length <= 20) return text
      return `${text.substring(0, 21)}...`
    }
    return ''
  }

  const onHandleNavigateCompletedQuestions = useCallback(() => {
    navigate('Question', {
      screen: 'QuestionHall',
      params: {
        isByFinishedChallenger: true
      }
    })
  }, [navigate])

  const onHandleNavigateUpdateProfile = useCallback(() => {
    navigate('Hall', {
      screen: 'Profile',
      params: {
        screen: 'UpdateProfileInfo'
      }
    })
  }, [navigate])

  const onHandleSignOut = useCallback(() => {
    Auth().signOut()
    dispatch(ResetUser())
    dispatch(ResetQuestion())
    dispatch(ResetAnswer())
    dispatch(ResetOpenedArticle())
  }, [dispatch])

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
                <Text style={styles.pointText}>1260</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomTopHeader}>
            <View style={styles.modalBottomBar} />
          </View>

          <View style={styles.content}>
            <ProfileButtonCard text='Atualizar dados do perfil' onPress={onHandleNavigateUpdateProfile} />
            <ProfileButtonCard text='Desafios concluídos' onPress={onHandleNavigateCompletedQuestions} />
          </View>

          <Image style={styles.studentImage} source={standStudent} />

          <TouchableOpacity style={styles.signOutButton} onPress={onHandleSignOut}>
            <Text style={styles.signOutButtonText}>Sair</Text>
          </TouchableOpacity>
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
