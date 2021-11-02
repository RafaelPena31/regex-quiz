import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { SetUser, UserModel } from '../../../domain/redux/UserStore'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import Button from '../../components/shared/buttons/Button'
import Input from '../../components/shared/TextInput'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'

export interface InitialAuthProps {
  email: string
  password: string
}

const { horizontalLogo } = images.logo

const currentHeight = helperRealHeightDimension()

export default function SignInScreen() {
  const initialValues = {
    email: '',
    password: ''
  }

  const dispatch = useDispatch()
  const { goBack, navigate } = useNavigation()

  const onPressNavigateToCreateAccount = () => navigate('SignUp')

  const onSubmit = async (values: InitialAuthProps) => {
    const { email, password } = values
    const isInputAvailable = email.length > 5 && password.length > 5

    if (isInputAvailable) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          const { displayName, email, emailVerified, isAnonymous, metadata, phoneNumber, photoURL, providerId, uid } = user.user

          const userModel: UserModel = {
            displayName,
            email,
            emailVerified,
            isAnonymous,
            metadata,
            phoneNumber,
            photoURL,
            providerId,
            uid
          }

          dispatch(SetUser(userModel))
        })
        .catch(err => {
          console.error(err)
          showMessage({
            message: 'Não foi possível realizar o seu login, tente novamente mais tarde',
            type: 'danger'
          })
        })
    } else {
      showMessage({
        message: 'Preencha com os dados corretos',
        type: 'danger'
      })
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.leftButton}>
          <BackButton onPress={goBack} />
        </View>

        <View style={styles.logoStack}>
          <Image source={horizontalLogo} />
          <Text style={styles.logoText}>Entre agora na sua conta Rgex e venha aprender como nunca antes</Text>
        </View>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, values, handleChange }) => (
            <View style={styles.contentStack}>
              <View style={styles.inputStack}>
                <Input placeholder='E-mail' keyboardType='email-address' value={values.email} setValue={handleChange('email')} />
                <Input secureTextEntry placeholder='Senha' value={values.password} setValue={handleChange('password')} />
              </View>
              <Button text='Entrar agora' onPress={handleSubmit} />
            </View>
          )}
        </Formik>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordTextButton}>Esqueci minha senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton} onPress={onPressNavigateToCreateAccount}>
          <Text style={styles.createAccountTextButton}>
            <Text style={styles.createAccountTextHighlight}>Crie sua conta</Text> para o Rgex
          </Text>
        </TouchableOpacity>
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
  leftButton: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  logoStack: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 70,
    paddingTop: 16,
    paddingHorizontal: 16
  },
  logoText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.text.default2,
    marginTop: 4
  },
  contentStack: {
    paddingHorizontal: 16,
    marginBottom: 6
  },
  forgotPasswordTextButton: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    lineHeight: 18,
    textAlign: 'center',
    color: colors.text.default2
  },
  createAccountButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  createAccountTextButton: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.text.default
  },
  createAccountTextHighlight: {
    color: colors.secondary.secondary1
  },
  inputStack: {
    marginBottom: 12
  }
})
