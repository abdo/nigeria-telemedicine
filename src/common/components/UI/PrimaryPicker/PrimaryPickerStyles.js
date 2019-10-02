import { StyleSheet } from 'react-native';

import { colors, fontTypes, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    width: '80%',
    alignSelf: 'center',
  },
  pickerContainer: {
    borderColor: colors.transparent,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
  },
  pickerText: {
    fontSize: fontSizes.md, fontWeight: 'bold', color: colors.gray03, fontFamily: fontTypes.main,
  },
  placeholder: {
    color: colors.primaryLight,
    fontWeight: 'normal',
  },
});

export default styles;
