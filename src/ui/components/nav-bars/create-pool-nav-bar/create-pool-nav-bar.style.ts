import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getRelativeWidth(20),
    paddingVertical: getRelativeWidth(15),
    width: '100%',
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 10,
    elevation: 3,
  },
  crossButtonWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  titleWrapper: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: getRelativeWidth(16),
    lineHeight: getRelativeWidth(19),
    fontWeight: 'bold',
  },
  textButtonWrapper: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
