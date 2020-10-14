import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screens/ListScreen'
import ItemScreen from '../screens/ItemScreen'
import { Screens } from './navigation_strings'

const HomeNavigation = createStackNavigator()

const stackA = () => {
  return (
    <HomeNavigation.Navigator>
      <HomeNavigation.Screen
        name={Screens.list_screen}
        component={ListScreen}
        options={{
          title: 'List Screen'
        }}
      />
      <HomeNavigation.Screen
        name={Screens.item_screen}
        component={ItemScreen}
        options={{
          title: 'Item Screen'
        }}
      />
    </HomeNavigation.Navigator>
  )
}

const stackB = () => {
  return (
    <HomeNavigation.Navigator>
      <HomeNavigation.Screen
        name={Screens.list_screen}
        component={ListScreen}
        options={{
          title: 'List Screen'
        }}
      />
      <HomeNavigation.Screen
        name={Screens.item_screen}
        component={ItemScreen}
        options={{
          title: 'Item Screen'
        }}
      />
    </HomeNavigation.Navigator>
  )
}

export default () => {
  return (
    <HomeNavigation.Navigator>
      <HomeNavigation.Screen
        name={Screens.list_screen}
        component={ListScreen}
        options={{
          title: 'List Screen'
        }}
      />
      <HomeNavigation.Screen
        name={Screens.item_screen}
        component={ItemScreen}
        options={{
          title: 'Item Screen'
        }}
      />
    </HomeNavigation.Navigator>
  )
}