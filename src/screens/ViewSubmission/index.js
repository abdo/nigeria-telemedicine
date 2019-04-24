import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../assets/styles/base';
import EnhancedView from '../../common/components/EnhancedView';
import Notice from '../../common/components/UI/Notice';
import PrimaryButton from '../../common/components/UI/PrimaryButton/PrimaryButton';
import QuickModal from '../../common/components/UI/QuickModal/QuickModal';
import styles from './styles';

export default class ViewSubmissionScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Submission',
  });

  onPressEdit = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onPressSubmit = () => {
    QuickModal('You will submit this complaint to request consult.', () => {});
  };

  render() {
    const { navigation } = this.props;

    let submission = {};
    let title = 'View Submission';
    if (navigation.state.params) {
      ({ submission } = navigation.state.params);
      ({ title } = navigation.state.params);
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

          <View style={styles.buttonsRowContainer}>
            <PrimaryButton onPress={this.onPressEdit}>Edit</PrimaryButton>
            <PrimaryButton
              backgroundColor={colors.primary}
              onPress={this.onPressSubmit}
            >
              {'Request Consult'}
            </PrimaryButton>
          </View>
        </Notice>
      </EnhancedView>
    );
  }
}

ViewSubmissionScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
