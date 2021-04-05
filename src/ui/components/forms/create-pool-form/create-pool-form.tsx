import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react'
import { View } from 'react-native'

import { SwitchInput, TextInput } from '@components/inputs'
import { OptionsInput } from '@components/inputs'

import { InputWithLabel } from '../input-with-label'
import { styles } from './create-pool-form.style'

export interface CreatePoolFormRef {
  getFormState: () => FormFields
}

export interface FormFields {
  title: string
  options: string[]
  isAnonymouse: boolean
  ableToAddMoreOptions: boolean
}

interface Props {
  setFormIsValid: (value: boolean) => void
}

const questionLabelText = 'Question'
const questionInputPlaceholderText = 'Ask a question'
const questionTextInputMaxLength = 140
const optionsMaxAmount = 8
const anonymouseVotingLabelText = 'Anonymous voting'
const ableToAddMoreOptionsLabelText = 'Ability to add more options'

export const CreatePoolForm = forwardRef<CreatePoolFormRef, Props>(({ setFormIsValid }, ref) => {
  const [title, setTitle] = useState<FormFields['title']>('')
  const [options, setOpptions] = useState<FormFields['options']>([])
  const [isAnonymouse, setIsAnonymouse] = useState<FormFields['isAnonymouse']>(true)
  const [ableToAddMoreOptions, setAbleToAddMoreOptions] = useState<FormFields['ableToAddMoreOptions']>(false)

  useImperativeHandle(ref, () => ({
    getFormState: () => ({
      title,
      options,
      isAnonymouse,
      ableToAddMoreOptions,
    }),
  }))

  const getInfoTextForInput = (inputKey: keyof FormFields): string => {
    switch (inputKey) {
      case 'title':
        return `${title.length}/${questionTextInputMaxLength}`
      case 'options':
        return `${options.length}/${optionsMaxAmount}`
    }
    return ''
  }

  const onChangeOptionValue = (value: string, index: number) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOpptions(newOptions)
  }
  const onCreateOptionValue = () => {
    const newOptions = [...options]
    newOptions.push('')
    setOpptions(newOptions)
  }
  const onDeleteOptionValue = (index: number) => {
    const newOptions = [...options]
    newOptions.splice(index, 1)
    setOpptions(newOptions)
  }

  const checkFormIsValid = () => {
    if (title.length !== 0 && options.some((optionValue: string) => optionValue.length !== 0)) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }

  const onChangeTitleText = (value: string) => {
    setTitle(value)
  }

  useEffect(() => {
    checkFormIsValid()
  }, [title, options])

  return (
    <View style={styles.root}>
      <View style={styles.inputWrapper}>
        <InputWithLabel labelText={questionLabelText} infoText={getInfoTextForInput('title')}>
          <TextInput
            value={title}
            onChangeText={onChangeTitleText}
            placeholder={questionInputPlaceholderText}
            placeholderTextColor="#7E7A9A"
            maxLength={questionTextInputMaxLength}
          />
        </InputWithLabel>
      </View>
      <View style={styles.inputWrapper}>
        <InputWithLabel labelText={questionLabelText} infoText={getInfoTextForInput('options')}>
          <OptionsInput
            values={options}
            maxValuesAmount={optionsMaxAmount}
            onCreateValue={onCreateOptionValue}
            onDeleteValue={onDeleteOptionValue}
            onChangeTextValue={onChangeOptionValue}
          />
        </InputWithLabel>
      </View>
      <View style={styles.inputWrapper}>
        <SwitchInput
          labelText={anonymouseVotingLabelText}
          iconName="user"
          value={isAnonymouse}
          onValueChange={setIsAnonymouse}
        />
      </View>
      <View style={styles.inputWrapper}>
        <SwitchInput
          labelText={ableToAddMoreOptionsLabelText}
          iconName="plus"
          value={ableToAddMoreOptions}
          onValueChange={setAbleToAddMoreOptions}
        />
      </View>
    </View>
  )
})
