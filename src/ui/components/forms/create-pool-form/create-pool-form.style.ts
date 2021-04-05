import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  inputWrapper: {
    marginTop: getRelativeWidth(25),
  },
})
