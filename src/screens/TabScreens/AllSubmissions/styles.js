import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  listItem: {
    minHeight: 60,
    flexDirection: 'column',
  },
  nameContainer: {
    alignSelf: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    color: colors.primaryLight,
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: fontSizes.sm,
    color: colors.gray03,
  },
  noSubmissionsContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
