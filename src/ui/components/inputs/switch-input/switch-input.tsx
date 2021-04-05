import React from 'react'
import { Text, View } from 'react-native'

import { Switch } from 'react-native-switch'
import Icon from 'react-native-vector-icons/FontAwesome'

import { getRelativeWidth } from '@utils/dimensions'

import { styles } from './switch-input.style'

interface Props {
  iconName: string
  labelText: string
  value: boolean
  onValueChange: (value: boolean) => void
}

export const SwitchInput: React.FC<Props> = ({ iconName, labelText, value, onValueChange }) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftPart}>
        <View style={styles.iconWrapper}>
          <Icon name={iconName} size={getRelativeWidth(20)} color="#FFFFFF" />
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>{labelText}</Text>
        </View>
      </View>
      <View style={styles.rightPart}>
        <Switch
          value={value}
          activeText=""
          barHeight={getRelativeWidth(26)}
          inActiveText=""
          containerStyle={!value && styles.switchContainerStyle}
          onValueChange={onValueChange}
          circleSize={getRelativeWidth(24)}
          backgroundActive={'#1C6EF2'}
          backgroundInactive={'transparent'}
          circleActiveColor={'#FFFFFF'}
          circleInActiveColor={'#7E7A9A'}
          switchLeftPx={getRelativeWidth(2)}
          switchRightPx={getRelativeWidth(2)}
          switchWidthMultiplier={2.1}
          switchBorderRadius={getRelativeWidth(100)}
        />
      </View>
    </View>
  )
}
