import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../components/shared/TextInput'
import { colors } from '../style/colors'
export interface InitialAuthProps {
  email: string
  password: string
}

export default function SignInScreen() {
  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>(.*)</Text>
        <Text style={styles.logo}>RegEx</Text>
      </View>
      <View style={styles.content}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, values, handleChange }) => (
            <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.form}>
              <View>
                <Input label='E-mail' keyboardType='email-address' value={values.email} setValue={handleChange('email')} />
                <Input label='Senha' value={values.password} setValue={handleChange('password')} />
              </View>

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </Formik>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  contentTitle: {
    padding: 24,
    marginBottom: 64
  },
  title: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 48,
    color: colors.secondary
  },
  logo: {
    fontFamily: 'FiraCode-SemiBold',
    textAlign: 'center',
    fontSize: 48,
    color: colors.secondary
  },
  content: {
    flex: 1
  },
  form: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'space-between'
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 16,
    color: colors.primary
  }
})
