import React from 'react'
import { Text, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { PoolData, UserData } from '@screens/chat'

import { InfoPart } from './pool-card-info-part'
import { PoolCardOption } from './pool-card-option'
import { styles } from './pool-card.style'

interface Props {
  userData: UserData
  poolData: PoolData
}

export const PoolCard: React.FC<Props> = ({ userData, poolData }) => {
  const onPressOption = () => {}
  const renderOptions = () =>
    poolData.poolFields.options.map((option: string, index: number) => (
      <View key={`pool_card_option_${index}`} style={styles.optionWrapper}>
        <PoolCardOption onPress={onPressOption} text={option} />
      </View>
    ))

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#A83D7F', '#6F1D7A', '#4C0977', '#031143']}
        style={styles.gradientView}
        angle={134}
        useAngle={true}
        locations={[0.05, 0.16, 0.3, 1]}
      >
        <InfoPart
          userName={userData.userName}
          avatarImageUrl={userData.avatarImageUrl}
          poolType={poolData.poolType}
          votesAmount={poolData.votesAmount}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{poolData.poolFields.title}</Text>
        </View>
        <View style={styles.optionsWrapper}>{renderOptions()}</View>
      </LinearGradient>
    </View>
  )
}
