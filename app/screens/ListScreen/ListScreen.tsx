import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ItemButton from '../../components/ItemButton'
import { Screens } from '../../navigation/navigation_strings'

const ListScreen = () => {

  const navigation = useNavigation()

  const list = useMemo(() => {
    const temp = []
    for (let i = 0; i < 40; i++) {
      temp.push(i)
    }
    return temp
  }, [])

  const renderItem = ({ item }: { item: number, index: number }) => {

    const onPress = () => {
      navigation.navigate(Screens.item_screen, { item, nextTitle: 'title 2' })
    }

    return (
      <ItemButton item={item} onPress={onPress} />
    )
  }

  return (
    <FlatList
      contentContainerStyle={{ alignItems: 'center' }}
      data={list}
      renderItem={renderItem}
    />
  )
}

export default ListScreen