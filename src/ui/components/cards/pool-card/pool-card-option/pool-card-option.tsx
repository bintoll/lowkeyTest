import React from 'react'
import { Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './pool-card-option.style'

interface Props {
  text: string
  onPress: () => void
}

export const PoolCardOption: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
