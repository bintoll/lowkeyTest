import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: getRelativeWidth(40),
    backgroundColor: 'rgba(28, 110, 242, 0.15)',
    borderRadius: getRelativeWidth(15),
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: getRelativeWidth(15),
  },
  textWrapper: {},
  text: {
    color: 'rgba(254, 254, 254, 1)',
    fontSize: getRelativeWidth(12),
    lineHeight: getRelativeWidth(18),
  },
})
