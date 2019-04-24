import React from 'react';

import {
  List, ListItem, Text, Content,
} from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import LoadingScreen from '../../../common/screens/LoadingScreen/LoadingScreen';

const AllSubmissionsScreen = ({ isGettingSubmissions, navigation }) => {
  const onPressListItem = (submission) => {
    navigation.navigate('ViewSubmission', {
      title: 'View Submission',
      submission,
    });
  };

  if (isGettingSubmissions) return <LoadingScreen />;
  return (
    <Content>
      <List>
        {submissions.map(submission => (
          <TouchableWithoutFeedback
            onPress={() => onPressListItem(submission)}
            key={submission._id}
          >
            <ListItem style={styles.listItem}>
              <Text>
                {'A submission by '}
                <Text style={styles.name}>{submission.name}</Text>
              </Text>
            </ListItem>
          </TouchableWithoutFeedback>
        ))}
      </List>
    </Content>
  );
};

AllSubmissionsScreen.propTypes = {
  isGettingSubmissions: PropTypes.bool,
  navigation: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  isGettingSubmissions: state.submission.isGettingSubmissions,
});

export default connect(mapStateToProps)(AllSubmissionsScreen);

const submissions = [
  {
    name: 'Abdo',
    phoneNumber: '2352235',
    complaint: 'I have a problemtji wij cw  vie vie ir vr ie ir ier ',
    _id: Math.random().toString(),
  },
  {
    name: 'Abdo',
    phoneNumber: '2352235',
    complaint: 'I have a problemtji wij cw  vie vie ir vr ie ir ier ',
    _id: Math.random().toString(),
  },
  {
    name: 'Abdo',
    phoneNumber: '2352235',
    complaint: 'I have a problemtji wij cw  vie vie ir vr ie ir ier ',
    _id: Math.random().toString(),
  },
  {
    name: 'Abdo',
    phoneNumber: '2352235',
    complaint: 'I have a problemtji wij cw  vie vie ir vr ie ir ier ',
    _id: Math.random().toString(),
  },
  {
    name: 'Abdo',
    phoneNumber: '2352235',
    complaint: 'I have a problemtji wij cw  vie vie ir vr ie ir ier ',
    _id: Math.random().toString(),
  },
];
