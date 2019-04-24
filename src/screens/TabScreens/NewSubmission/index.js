import { Textarea, Text } from 'native-base';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../common/components/EnhancedView';
import Notice from '../../../common/components/UI/Notice';
import PrimaryButton from '../../../common/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../common/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';

const NewSubmissionScreen = () => (
  <EnhancedView keyboardVerticalOffset={60}>
    <Notice>
      <Text style={styles.noticeContent}>
        {
          'Please enter your contact informatino and chief complaint to make a new'
        }
        {' submission'}
      </Text>
    </Notice>
    <PrimaryTextInput
      placeholder="Your Name"
      color={colors.primaryLight}
      backgroundColor={colors.primary.fade(0.2)}
      hasBackgroundOnFocus
      colorOnFocus={colors.trueWhite}
      name="name"
      // onChangeText={this.onChangeInput}
      // error={!!errors.firstName}
      // errorText={errors.firstName}
    />
    <PrimaryTextInput
      placeholder="Your Phone Number"
      color={colors.primaryLight}
      backgroundColor={colors.primary.fade(0.2)}
      hasBackgroundOnFocus
      colorOnFocus={colors.trueWhite}
      name="phoneNumber"
      // onChangeText={this.onChangeInput}
      // error={!!errors.firstName}
      // errorText={errors.firstName}
    />
    <Textarea
      rowSpan={6}
      bordered
      placeholder="Your Chief Complaint"
      placeholderTextColor={colors.primaryLight.fade(0.1)}
      style={styles.textArea}
    />
    <PrimaryButton>Complete</PrimaryButton>
  </EnhancedView>
);

export default NewSubmissionScreen;
