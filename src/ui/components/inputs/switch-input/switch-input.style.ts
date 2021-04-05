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
  iconWrapper: {},
  labelWrapper: {
    marginLeft: getRelativeWidth(15),
  },
  labelText: {
    color: '#FEFEFE',
    fontSize: getRelativeWidth(14),
    lineHeight: getRelativeWidth(21),
  },
  rightPart: {},
  switchContainerStyle: {
    borderWidth: 1,
    borderColor: '#7E7A9A',
    borderStyle: 'solid',
  },
})
