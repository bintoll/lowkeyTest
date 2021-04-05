import React from 'react'
import { View, Text } from 'react-native'

import { TextButton } from '@components/buttons'
import CrossButton from '@components/buttons/cross-button/cross-button'

import { styles } from './create-pool-nav-bar.style'

interface Props {
  createPoolButtonEnabled?: boolean
  onPressClose: () => void
  onPressCreatePool: () => void
}

const titleText = 'New Poll'
const textButtinText = 'Create'

export const CreatePoolNavBar: React.FC<Props> = ({ onPressClose, onPressCreatePool, createPoolButtonEnabled }) => {
  return (
    <View style={styles.root}>
      <View style={styles.crossButtonWrapper}>
        <CrossButton onPress={onPressClose} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{titleText}</Text>
      </View>
      <View style={styles.textButtonWrapper}>
        <TextButton text={textButtinText} onPress={onPressCreatePool} disabled={!createPoolButtonEnabled} />
      </View>
    </View>
  )
}
