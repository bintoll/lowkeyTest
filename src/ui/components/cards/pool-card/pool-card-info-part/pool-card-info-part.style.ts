import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    height: getRelativeWidth(36),
    width: getRelativeWidth(36),
    overflow: 'hidden',
    borderRadius: getRelativeWidth(36),
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  userInfoWrapper: {
    marginLeft: getRelativeWidth(10),
  },
  poolTypeLabelWrapper: {},
  poolTypeLabelText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(10),
    lineHeight: getRelativeWidth(16),
  },
  userNameWrapper: {
    marginTop: getRelativeWidth(2),
  },
  userNameText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(12),
    lineHeight: getRelativeWidth(18),
  },
  rightPart: {},
  votesCircle: {
    backgroundColor: '#AC1393',
    height: getRelativeWidth(50),
    width: getRelativeWidth(50),
    borderRadius: getRelativeWidth(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  votesAmountText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(16),
    lineHeight: getRelativeWidth(20),
  },
  votesLabelText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(10),
    lineHeight: getRelativeWidth(12),
  },
})
