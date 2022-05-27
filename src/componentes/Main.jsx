import React from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'
import { CambiarColor } from './RepositoryItems'


const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight  , flexGrow: 1 }}>
        <Text>Tecnologias</Text>
        <hr/>
        <RepositoryList/>
        
    </View>
  )
}

export default Main;