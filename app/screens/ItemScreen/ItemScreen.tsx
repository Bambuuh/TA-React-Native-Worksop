import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const ItemScreen: FunctionComponent<any> = (props) => {

  const itemNumber = props.route.params.item

  return (
    <View style={styles.container}>
      <Text>
        {itemNumber}
      </Text>
    </View>
  )
}

export default ItemScreen