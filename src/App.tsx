import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import AppStack from './view/routes/AppStack'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <StatusBar />
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
