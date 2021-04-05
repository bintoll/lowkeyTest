import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    borderRadius: getRelativeWidth(18),
    overflow: 'hidden',
    width: '100%',
  },
  gradientView: {
    paddingHorizontal: getRelativeWidth(20),
    paddingVertical: getRelativeWidth(19),
    width: '100%',
  },
  titleWrapper: {
    marginTop: getRelativeWidth(19),
  },
  titleText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(15),
    lineHeight: getRelativeWidth(22),
  },
  optionsWrapper: {
    marginTop: getRelativeWidth(12),
  },
  optionWrapper: {
    marginBottom: getRelativeWidth(8),
  },
})
