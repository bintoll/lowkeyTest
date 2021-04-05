import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreenNameMain } from '@constants/navigation'

import { ChatScreen } from '@screens/chat'
import { CreatePoolScreen } from '@screens/create-pool'

import type { MainStackParamList } from './typings'

const MainStack = createStackNavigator<MainStackParamList>()

interface Props {}

export const MainNavigation: React.NamedExoticComponent<React.PropsWithChildren<Props>> = React.memo(() => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName={NavScreenNameMain.CreatePool} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={NavScreenNameMain.CreatePool} component={CreatePoolScreen} />
      <MainStack.Screen name={NavScreenNameMain.Chat} component={ChatScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
))
