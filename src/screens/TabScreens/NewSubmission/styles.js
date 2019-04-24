import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  noticeContent: {
    color: colors.primaryLight,
    fontSize: fontSizes.sm,
    fontWeight: 'bold',
  },
  textArea: {
    width: '78%',
    borderColor: colors.primaryLight.fade(0.5),
    borderRadius: 5,
    fontSize: fontSizes.md,
    paddingTop: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default styles;
