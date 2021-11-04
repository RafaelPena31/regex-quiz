import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import Modal from 'react-native-modal'
import Button from '../../../components/shared/buttons/Button'
import { colors } from '../../../style/colors'

interface AboutModalProps {
  url: string
  name: string
  role: string
  visible: boolean
  setVisible: () => void
}

export default function AboutModal({ name, role, url, visible, setVisible }: AboutModalProps) {
  const onHandleOpenExternalURL = async () => {
    const isAvailableURL = await Linking.canOpenURL(url)

    if (isAvailableURL) {
      Linking.openURL(url)
    } else {
      showMessage({
        message: 'Não foi possível abrir a URL, verifique sua conexão e tente novamente',
        type: 'warning'
      })
    }
  }

  return (
    <Modal isVisible={visible} onSwipeComplete={setVisible} onBackdropPress={setVisible} swipeDirection={['down']} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTile}>{role}</Text>

        <Button text='Saiba mais' onPress={onHandleOpenExternalURL} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0
  },
  content: {
    backgroundColor: '#FFFFFF',
    margin: 8,
    padding: 16,
    alignItems: 'center',
    borderRadius: 16
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text.default,
    marginTop: 8,
    marginBottom: 16
  },
  subTile: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral.inputBorder,
    marginBottom: 24
  }
})
