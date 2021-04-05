import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './pool-card-info-part.style'

interface Props {
  userName: string
  poolType: string
  avatarImageUrl: string
  votesAmount: number
}

const votesLabelText = 'votes'

export const InfoPart: React.FC<Props> = ({ userName, poolType, avatarImageUrl, votesAmount }) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftPart}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatarImage}
            source={{
              uri: avatarImageUrl,
            }}
          />
        </View>
        <View style={styles.userInfoWrapper}>
          <View style={styles.poolTypeLabelWrapper}>
            <Text style={styles.poolTypeLabelText}>{poolType}</Text>
          </View>
          <View style={styles.userNameWrapper}>
            <Text style={styles.userNameText}>{userName}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightPart}>
        <View style={styles.votesCircle}>
          <Text style={styles.votesAmountText}>{votesAmount}</Text>
          <Text style={styles.votesLabelText}>{votesLabelText}</Text>
        </View>
      </View>
    </View>
  )
}
