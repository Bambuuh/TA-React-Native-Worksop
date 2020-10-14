import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './home'

export default () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}