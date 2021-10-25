import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import AppStack from './view/routes/AppStack'
import { colors } from './view/style/colors'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <StatusBar backgroundColor={colors.secondary} />
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})
