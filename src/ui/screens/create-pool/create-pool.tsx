import React, { useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'

import { NavScreenNameMain } from '@constants/navigation'

import type { MainStackParamList } from '@navigation/main'

import { CreatePoolForm, CreatePoolFormRef } from '@components/forms'
import { CreatePoolNavBar } from '@components/nav-bars'

import { PoolData } from '@screens/chat'

import { styles } from './create-pool.style'

interface Props {
  navigation: StackNavigationProp<MainStackParamList, NavScreenNameMain.Chat>
}

const poolData: PoolData = {
  votesAmount: 5,
  poolType: 'Public Poll',
  poolFields: {
    title: 'What is the greatest NBA team in the history?',
    options: ['Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics'],
    isAnonymouse: false,
    ableToAddMoreOptions: false,
  },
}

export const CreatePoolScreen: React.FC<Props> = ({ navigation }) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(true)
  const createPoolFormRef = useRef<CreatePoolFormRef | null>(null)

  const onPressClose = () => {}
  const onPressCreatePool = () => {
    if (createPoolFormRef.current) {
      navigation.navigate(NavScreenNameMain.Chat, {
        poolData: { ...poolData, poolFields: createPoolFormRef.current.getFormState() },
      })
    }
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#2467F4', '#14131B']}
        style={styles.gradientView}
        angle={154}
        useAngle={true}
        locations={[0.04, 0.3]}
      />
      <ScrollView style={styles.scrollVIew} contentContainerStyle={styles.scrollVIewContentContainerStyle}>
        <CreatePoolForm
          setFormIsValid={setFormIsValid}
          ref={(comp) => {
            createPoolFormRef.current = comp
          }}
        />
      </ScrollView>
      <CreatePoolNavBar
        createPoolButtonEnabled={formIsValid}
        onPressClose={onPressClose}
        onPressCreatePool={onPressCreatePool}
      />
    </View>
  )
}
