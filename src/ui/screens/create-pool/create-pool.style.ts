import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#14131B',
  },
  gradientView: {
    flex: 1,
    opacity: 0.12,
    borderTopLeftRadius: getRelativeWidth(20),
    borderTopRightRadius: getRelativeWidth(20),
    overflow: 'hidden',
  },
  scrollVIew: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    flex: 1,
  },
  scrollVIewContentContainerStyle: {
    borderStartColor: '#14131B',
    paddingTop: getRelativeWidth(44),
    paddingHorizontal: getRelativeWidth(20),
    paddingBottom: getRelativeWidth(150),
  },
})
