import { Textarea, Text } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../common/components/EnhancedView';
import Notice from '../../../common/components/UI/Notice';
import PrimaryButton from '../../../common/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../common/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';

export default class NewSubmissionScreen extends Component {
  state = {
    name: '',
    phoneNumber: '',
    complaint: '',
    nameError: '',
    phoneNumberError: '',
    complaintError: '',
  };

  onChangeInput = (name, value) => {
    const errorName = name === 'name'
      ? 'nameError'
      : name === 'phoneNumber'
        ? 'phoneNumberError'
        : 'complaintError';

    this.setState({ [name]: value, [errorName]: '' });
  };

  onPressComplete = () => {
    const { name, phoneNumber, complaint } = this.state;

    let noError = true;

    if (!name) {
      this.setState({ nameError: 'Name is required' });
      noError = false;
    }
    if (!phoneNumber) {
      this.setState({ phoneNumberError: 'Phone number is required' });
      noError = false;
    }
    if (!complaint) {
      this.setState({ complaintError: 'Complaint is required' });
      noError = false;
    }
    if (name && name.length < 2) {
      this.setState({ nameError: 'Must be longer than 2 characters' });
      noError = false;
    }
    if (phoneNumber && phoneNumber.length < 7) {
      this.setState({ phoneNumberError: 'Must be longer than 7 characters' });
      noError = false;
    }
    if (complaint && complaint.length < 10) {
      this.setState({ complaintError: 'Must be longer than 10 characters' });
      noError = false;
    }

    if (noError) {
      const { navigation } = this.props;

      navigation.navigate('ViewSubmission', {
        submission: this.state,
        title: 'View your submission before submitting it',
        showActions: true,
        clearInput: () => this.setState({
          name: '',
          phoneNumber: '',
          complaint: '',
          nameError: '',
          phoneNumberError: '',
          complaintError: '',
        }),
      });
    }
  };

  render() {
    const {
      name,
      phoneNumber,
      complaint,
      nameError,
      phoneNumberError,
      complaintError,
    } = this.state;
    return (
      <EnhancedView keyboardVerticalOffset={60}>
        <Notice>
          <Text style={styles.noticeContent}>
            {
              'Please enter your contact information and chief complaint to make a new'
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
          onChangeText={this.onChangeInput}
          error={!!nameError}
          errorText={nameError}
          value={name}
        />
        <PrimaryTextInput
          placeholder="Your Phone Number"
          color={colors.primaryLight}
          backgroundColor={colors.primary.fade(0.2)}
          hasBackgroundOnFocus
          colorOnFocus={colors.trueWhite}
          name="phoneNumber"
          keyboardType="numeric"
          onChangeText={this.onChangeInput}
          error={!!phoneNumberError}
          errorText={phoneNumberError}
          value={phoneNumber}
        />
        <Textarea
          rowSpan={6}
          bordered
          placeholder="Your Chief Complaint"
          placeholderTextColor={colors.primaryLight.fade(0.1)}
          style={styles.textArea}
          onChangeText={value => this.onChangeInput('complaint', value)}
          value={complaint}
        />
        {complaintError ? (
          <Text style={styles.errorText}>{complaintError}</Text>
        ) : null}
        <PrimaryButton onPress={this.onPressComplete}>Complete</PrimaryButton>
      </EnhancedView>
    );
  }
}

NewSubmissionScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
