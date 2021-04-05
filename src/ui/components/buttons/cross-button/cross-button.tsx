import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { getRelativeWidth } from '@utils/dimensions'

interface Props extends TouchableOpacityProps {
  iconSize?: number
}

const CrossButton: React.FC<Props> = ({ iconSize, ...restProps }) => {
  return (
    <TouchableOpacity {...restProps}>
      <Icon name="times" size={iconSize || getRelativeWidth(18)} color="#FFFFFF" />
    </TouchableOpacity>
  )
}

export default CrossButton
