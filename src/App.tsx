import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configStore from './domain/redux/store'
import AppStack from './view/routes/AppStack'
import { colors } from './view/style/colors'

const { persistor, store } = configStore

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={styles.appContainer}>
            <StatusBar backgroundColor={colors.secondary.secondary2} barStyle='dark-content' />
            <AppStack />
            <FlashMessage position='top' />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})
