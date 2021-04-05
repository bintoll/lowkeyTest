import React from 'react'
import { View } from 'react-native'

import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavScreenNameMain } from '@constants/navigation'

import type { MainStackParamList } from '@navigation/main'

import { PoolCard } from '@components/cards'
import { FormFields } from '@components/forms'

import { styles } from './chat.style'

export interface UserData {
  userName: string
  avatarImageUrl: string
}

export interface PoolData {
  votesAmount: number
  poolType: string
  poolFields: FormFields
}

interface Props {
  navigation: StackNavigationProp<MainStackParamList, NavScreenNameMain.Chat>
  route: RouteProp<{ params: { poolData: PoolData } }, 'params'>
}

const userData: UserData = {
  userName: 'Kelly Hodges',
  avatarImageUrl:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
}

export const ChatScreen: React.FC<Props> = ({ route }) => {
  const poolData = route.params.poolData
  return (
    <View style={styles.root}>
      <PoolCard userData={userData} poolData={poolData} />
    </View>
  )
}
