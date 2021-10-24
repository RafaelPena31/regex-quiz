import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import AppStack from './view/routes/AppStack'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <AppStack />
    </SafeAreaView>
  )
}

export default App
