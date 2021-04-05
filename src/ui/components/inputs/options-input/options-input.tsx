import React from 'react'
import { View } from 'react-native'

import { OptionsInputButton } from '@components/buttons'

import { TextInput } from '../text-input'
import { styles } from './options-input.style'

interface Props {
  values: string[]
  maxValuesAmount: number
  onCreateValue: () => void
  onDeleteValue: (index: number) => void
  onChangeTextValue: (value: string, index: number) => void
}

const optionTextInputPlaceholdrText = 'Write an option here'
const addOptionButtonText = 'Add an option'

export const OptionsInput: React.FC<Props> = ({
  values,
  maxValuesAmount,
  onChangeTextValue,
  onDeleteValue,
  onCreateValue,
}) => {
  const renderAddOptionButton = () =>
    values.length < maxValuesAmount && <OptionsInputButton title={addOptionButtonText} onPress={onCreateValue} />

  return (
    <View style={styles.root}>
      {values.map((value: string, index: number) => (
        <View key={`option_${index}`} style={styles.optionWrapper}>
          <TextInput
            placeholder={optionTextInputPlaceholdrText}
            placeholderTextColor="#7E7A9A"
            value={value}
            onChangeText={(newValue: string) => onChangeTextValue(newValue, index)}
            hasCrossButton={true}
            onPressCrossButton={() => onDeleteValue(index)}
          />
        </View>
      ))}
      {renderAddOptionButton()}
    </View>
  )
}
