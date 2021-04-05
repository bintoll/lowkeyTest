import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: getRelativeWidth(50),
    backgroundColor: '#1C1A2A',
    borderRadius: getRelativeWidth(12),
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: getRelativeWidth(15),
  },
  titleText: {
    color: '#1C6EF2',
    fontSize: getRelativeWidth(15),
    lineHeight: getRelativeWidth(22),
  },
})
