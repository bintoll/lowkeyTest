import React from 'react'
import { TouchableOpacityProps, TouchableOpacity, TextProps, Text } from 'react-native'

import { styles } from './options-input-button.style'

interface Props extends TouchableOpacityProps {
  title: string
  titleTextProps?: TextProps
}

export const OptionsInputButton: React.FC<Props> = ({ title, titleTextProps, ...restProps }) => {
  return (
    <TouchableOpacity {...restProps} style={[styles.root, restProps && restProps.style]}>
      <Text {...titleTextProps} style={[styles.titleText, titleTextProps && titleTextProps.style]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
