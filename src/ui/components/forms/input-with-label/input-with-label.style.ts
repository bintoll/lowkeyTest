import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  labelWithInfoWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelWrapper: {},
  labelText: {
    color: '#7E7A9A',
    fontSize: getRelativeWidth(12),
    lineHeight: getRelativeWidth(22),
  },
  infoWrapper: {},
  infoText: {
    color: '#7E7A9A',
    fontSize: getRelativeWidth(12),
    lineHeight: getRelativeWidth(22),
  },
  childrenWrapper: {
    marginTop: getRelativeWidth(10),
  },
})
