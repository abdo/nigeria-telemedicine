import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../assets/styles/base';
import EnhancedView from '../../common/components/EnhancedView';
import Notice from '../../common/components/UI/Notice';
import PrimaryButton from '../../common/components/UI/PrimaryButton/PrimaryButton';
import QuickModal from '../../common/components/UI/QuickModal/QuickModal';
import styles from './styles';
import QuickHint from '../../common/components/UI/QuickHint/QuickHint';

class ViewSubmissionScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Submission',
  });

  onPressEdit = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onPressSubmit = () => {
    const { navigation } = this.props;

    const submit = () => {
      if (navigation.state.params) {
        const { clearInput } = navigation.state.params;
        clearInput();
      }

      // Do something

      QuickHint('Successfully submitted');
      navigation.replace('Tab');
    };
    QuickModal('You will submit this complaint to request consult.', submit);
  };

  render() {
    const { navigation, isSubmittingSubmission } = this.props;

    let submission = {};
    let title = 'View Submission';
    let showActions = false;
    if (navigation.state.params) {
      ({ submission } = navigation.state.params);
      ({ title } = navigation.state.params);
      ({ showActions } = navigation.state.params);
    }

    return (
      <EnhancedView>
        <Notice
          title={title}
          titleStyle={styles.title}
          style={styles.outerNotice}
        >
          <Notice style={styles.innerNotice}>
            <View style={styles.rowContainer}>
              <Text style={styles.key}>Name:</Text>
              <Text>
                {' '}
                {submission.name}
              </Text>
            </View>
          </Notice>

          <Notice style={styles.innerNotice}>
            <View style={styles.rowContainer}>
              <Text style={styles.key}>Phone Number:</Text>
              <Text>
                {' '}
                {submission.phoneNumber}
              </Text>
            </View>
          </Notice>

          <Notice style={styles.innerNotice}>
            <View style={styles.columnContainer}>
              <Text style={styles.textAreaKey}>Chief Complaint:</Text>
              <Text>
                {' '}
                {submission.complaint}
              </Text>
            </View>
          </Notice>

          {showActions && (
            <View style={styles.buttonsRowContainer}>
              <PrimaryButton onPress={this.onPressEdit}>Edit</PrimaryButton>
              <PrimaryButton
                backgroundColor={colors.primary}
                onPress={this.onPressSubmit}
                isLoading={isSubmittingSubmission}
              >
                {'Request Consult'}
              </PrimaryButton>
            </View>
          )}
        </Notice>
      </EnhancedView>
    );
  }
}

ViewSubmissionScreen.propTypes = {
  navigation: PropTypes.shape({}),
  isSubmittingSubmission: PropTypes.bool,
};

const mapStateToProps = state => ({
  isSubmittingSubmission: state.submission.isSubmittingSubmission,
});

export default connect(mapStateToProps)(ViewSubmissionScreen);
