import { NavScreenNameMain } from '@constants/navigation'

import { PoolData } from '@screens/chat'

export type ChatScreenParams = { poolData: PoolData }
export type CreatePollScreenParams = undefined

export type MainStackParamList = {
  [NavScreenNameMain.CreatePool]: CreatePollScreenParams
  [NavScreenNameMain.Chat]: ChatScreenParams
}
