import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './input-with-label.style'

interface Props {
  labelText: string
  infoText: string
}

export const InputWithLabel: React.FC<React.PropsWithChildren<Props>> = ({ children, labelText, infoText }) => {
  return (
    <View style={styles.root}>
      <View style={styles.labelWithInfoWrapper}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>{labelText}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoText}>{infoText}</Text>
        </View>
      </View>
      <View style={styles.childrenWrapper}>{children}</View>
    </View>
  )
}
