import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

import { styles } from './text-button.style'

interface Props {
  text: string
  disabled?: boolean
  textStyle?: StyleProp<TextStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  onPress: () => void
}

export const TextButton: React.FC<Props> = ({ onPress, text, wrapperStyle, textStyle, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} style={wrapperStyle} disabled={disabled}>
      <Text style={[styles.text, textStyle, disabled && styles.buttonDisabledText]}>{text}</Text>
    </TouchableOpacity>
  )
}
