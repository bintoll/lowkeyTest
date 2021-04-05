import React from 'react'
import { TextInputProps, View, ViewProps, TextInput as BaseTextInput } from 'react-native'

import CrossButton from '@components/buttons/cross-button/cross-button'

import { getRelativeWidth } from '@utils/dimensions'

import { styles } from './text-input.style'

interface Props extends TextInputProps {
  hasCrossButton?: boolean
  onPressCrossButton?: () => void
  wrapperProps?: ViewProps
}

export const TextInput: React.FC<Props> = ({ wrapperProps, hasCrossButton, onPressCrossButton, ...restProps }) => {
  const renderCrossButton = () =>
    hasCrossButton &&
    onPressCrossButton && (
      <View style={styles.crossButtonWrapper}>
        <CrossButton onPress={onPressCrossButton} iconSize={getRelativeWidth(14)} />
      </View>
    )

  return (
    <View {...wrapperProps} style={[styles.root, wrapperProps && wrapperProps.style]}>
      <BaseTextInput
        value={restProps.value}
        onChangeText={restProps.onChangeText}
        {...restProps}
        style={[styles.textInput, restProps.style]}
      />
      {renderCrossButton()}
    </View>
  )
}
