import { List, ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import LoadingScreen from '../../../common/screens/LoadingScreen/LoadingScreen';
import * as submissionActions from '../../../store/actions/submissionActions';
import EnhancedView from '../../../common/components/EnhancedView';

class AllSubmissionsScreen extends Component {
  componentDidMount() {
    this.getAllSubmissions();
  }

  getAllSubmissions = () => {
    const { getAllSubmissions } = this.props;
    getAllSubmissions();
  };

  onPressListItem = (submission) => {
    const { navigation } = this.props;

    navigation.navigate('ViewSubmission', {
      title: 'View Submission',
      submission,
    });
  };

  render() {
    const { isGettingSubmissions, allSubmissions } = this.props;
    if (isGettingSubmissions) return <LoadingScreen />;

    if (allSubmissions.length === 0) {
      return (
        <View style={styles.noSubmissionsContainer}>
          <Text>No Submissions</Text>
        </View>
      );
    }

    return (
      <EnhancedView onRefresh={this.getAllSubmissions}>
        <List>
          {allSubmissions.map((submission) => {
            const jsDate = submission.date
              ? new Date(submission.date)
              : new Date();
            const readableDate = `${jsDate.getDate()}-${jsDate.getMonth()
              + 1}-${jsDate.getFullYear()} ${jsDate.getHours()}:${jsDate.getMinutes()}`;

            return (
              <TouchableWithoutFeedback
                onPress={() => this.onPressListItem(submission)}
                key={submission._id}
              >
                <ListItem style={styles.listItem}>
                  <Text style={styles.nameContainer}>
                    {'A submission by '}
                    <Text style={styles.name}>{submission.name}</Text>
                  </Text>
                  {submission.date ? (
                    <Text style={styles.date}>{readableDate}</Text>
                  ) : null}
                </ListItem>
              </TouchableWithoutFeedback>
            );
          })}
        </List>
      </EnhancedView>
    );
  }
}

AllSubmissionsScreen.propTypes = {
  isGettingSubmissions: PropTypes.bool,
  navigation: PropTypes.shape({}),

  getAllSubmissions: PropTypes.func,
  allSubmissions: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  isGettingSubmissions: state.submission.isGettingSubmissions,
  allSubmissions: state.submission.submissions,
});

const mapDispatchToProps = {
  getAllSubmissions: submissionActions.getAllSubmissions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllSubmissionsScreen);
