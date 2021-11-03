import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { CreateUser } from '../../../data/services/server/user/UserService'
import { SetSQLUser, SetUser } from '../../../domain/redux/UserStore'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import Button from '../../components/shared/buttons/Button'
import Input from '../../components/shared/TextInput'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'

export interface InitialAuthProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const { horizontalLogo } = images.logo

const currentHeight = helperRealHeightDimension()

export default function SignUpScreen() {
  const initialValues: InitialAuthProps = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const dispatch = useDispatch()
  const { goBack, navigate } = useNavigation()

  const onPressNavigateToLoginAccount = () => navigate('SignIn')

  const onSubmit = async (values: InitialAuthProps) => {
    const { name, email, password, confirmPassword } = values
    const isInputAvailable =
      name.length > 1 && email.length > 5 && password.length >= 6 && confirmPassword.length >= 6 && password === confirmPassword

    if (isInputAvailable) {
      const createResponse = await CreateUser({ name, email, password })
      const { requestedStatus, response } = createResponse

      if (requestedStatus.firebase.statusText === 'Created' && requestedStatus.sql.statusText === 'Created') {
        dispatch(SetUser(response.firebase!))
        dispatch(SetSQLUser(response.sql!))
      } else {
        showMessage({
          message: 'Não foi possível criar a sua conta, tente novamente mais tarde',
          type: 'danger'
        })
      }
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
          <Text style={styles.logoText}>crie sua conta Rgex agora e venha aprender como nunca antes</Text>
        </View>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, values, handleChange }) => (
            <View style={styles.contentStack}>
              <View style={styles.inputStack}>
                <Input placeholder='Nome' value={values.name} setValue={handleChange('name')} />
                <Input placeholder='E-mail' keyboardType='email-address' value={values.email} setValue={handleChange('email')} />
                <Input secureTextEntry placeholder='Senha' value={values.password} setValue={handleChange('password')} />
                <Input
                  secureTextEntry
                  placeholder='Confirmar senha'
                  value={values.confirmPassword}
                  setValue={handleChange('confirmPassword')}
                />
              </View>
              <Button text='Crie sua conta' onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={onPressNavigateToLoginAccount} style={styles.createAccountButton}>
          <Text style={styles.createAccountTextButton}>
            <Text style={styles.createAccountTextHighlight}>Já possuo uma conta</Text> para o Rgex
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: currentHeight,
    backgroundColor: colors.background
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
    paddingHorizontal: 16
  },
  createAccountButton: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
