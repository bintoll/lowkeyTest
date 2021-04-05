import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: getRelativeWidth(50),
    backgroundColor: '#1C1A2A',
    borderRadius: getRelativeWidth(12),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  textInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: getRelativeWidth(20),
    paddingTop: getRelativeWidth(14),
    paddingBottom: getRelativeWidth(15),
    color: '#7E7A9A',
    fontSize: getRelativeWidth(15),
    lineHeight: getRelativeWidth(18),
    flex: 1,
  },
  crossButtonWrapper: {
    width: getRelativeWidth(50),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 110, 242, 0.1)',
  },
})
