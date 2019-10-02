import { Text } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../common/components/EnhancedView';
import Notice from '../../../common/components/UI/Notice';
import PrimaryButton from '../../../common/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../common/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';
import PrimaryPicker from '../../../common/components/UI/PrimaryPicker/PrimaryPicker';
import PrimaryDatePicker from '../../../common/components/UI/PrimaryDatePicker';

export default class NewSubmissionScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
  };

  onChangeInput = (name, value) => {
    const errorName = `${name}Error`;

    this.setState({ [name]: value, [errorName]: '' });
  };

  onPressComplete = () => {
    const {
      firstName, lastName, phoneNumber,
    } = this.state;
    console.log(this.state);

    let noError = true;

    Object.keys(this.state).forEach((key) => {
      const state = { ...this.state };
      if (!state[key] && !key.includes('Error')) {
        const errorKey = `${key}Error`;
        this.setState({ [errorKey]: 'Field is required' });
        noError = false;
      }
    });

    if (firstName && firstName.length < 2) {
      this.setState({ firstNameError: 'Must be longer than 2 characters' });
      noError = false;
    }
    if (lastName && lastName.length < 2) {
      this.setState({ lastNameError: 'Must be longer than 2 characters' });
      noError = false;
    }
    if (phoneNumber && phoneNumber.length !== 11) {
      this.setState({ phoneNumberError: 'Must be 11 digits' });
      noError = false;
    }
    if (noError) {
      const { navigation } = this.props;

      navigation.navigate('ViewSubmission', {
        submission: this.state,
        title: 'View your submission before submitting it',
        showActions: true,
        clearInput: () => this.setState({
          firstName: '',
          lastName: '',
          gender: '',
          phoneNumber: '',
          dateOfBirth: '',
        }),
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
    } = this.state;

    const state = { ...this.state };

    return (
      <EnhancedView keyboardVerticalOffset={60}>
        <Notice>
          <Text style={styles.noticeContent}>
            {
              'Please enter your contact information to make a new submission'
            }
          </Text>
        </Notice>
        <PrimaryTextInput
          placeholder="Your First Name"
          color={colors.primaryLight}
          backgroundColor={colors.primary.fade(0.2)}
          hasBackgroundOnFocus
          colorOnFocus={colors.trueWhite}
          name="firstName"
          onChangeText={this.onChangeInput}
          error={!!state.firstNameError}
          errorText={state.firstNameError}
          value={firstName}
          maxCharacters={30}
        />
        <PrimaryTextInput
          placeholder="Your Last Name"
          color={colors.primaryLight}
          backgroundColor={colors.primary.fade(0.2)}
          hasBackgroundOnFocus
          colorOnFocus={colors.trueWhite}
          name="lastName"
          onChangeText={this.onChangeInput}
          error={!!state.lastNameError}
          errorText={state.lastNameError}
          value={lastName}
          maxCharacters={30}
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
          error={!!state.phoneNumberError}
          errorText={state.phoneNumberError}
          value={phoneNumber}
          maxCharacters={30}
        />
        <PrimaryPicker
          placeholder="Your Gender"
          title="Gender"
          name="gender"
          onChange={this.onChangeInput}
          error={!!state.genderError}
          errorText={state.genderError}
          options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
        />
        <PrimaryDatePicker
          placeholder="Your Date of Birth"
          title="Date of Birth"
          color={colors.primaryLight}
          name="dateOfBirth"
          onChange={this.onChangeInput}
          error={!!state.dateOfBirthError}
          errorText={state.dateOfBirthError}
        />

        <PrimaryButton onPress={this.onPressComplete}>Complete</PrimaryButton>
      </EnhancedView>
    );
  }
}

NewSubmissionScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
