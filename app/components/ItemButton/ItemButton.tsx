import React, { FunctionComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type OwnProps = {
  item: number
  onPress: () => void
}

type Props = OwnProps

const ItemButton: FunctionComponent<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemButton