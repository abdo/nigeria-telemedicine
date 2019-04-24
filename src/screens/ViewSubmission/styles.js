import { StyleSheet } from 'react-native';

import { colors, gaps } from '../../assets/styles/base';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  outerNotice: {
    width: '90%',
  },
  innerNotice: {
    width: '90%',
  },
  title: {
    color: colors.primaryLight,
  },
  key: {
    fontWeight: 'bold',
    color: colors.primaryLight,
  },
  textAreaKey: {
    fontWeight: 'bold',
    marginBottom: gaps.md,
    color: colors.primaryLight,
  },
});

export default styles;
