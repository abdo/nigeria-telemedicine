import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../assets/styles/base';
import * as submissionActions from '../../store/actions/submissionActions';
import EnhancedView from '../../common/components/EnhancedView';
import Notice from '../../common/components/UI/Notice';
import PrimaryButton from '../../common/components/UI/PrimaryButton/PrimaryButton';
import QuickHint from '../../common/components/UI/QuickHint/QuickHint';
import QuickModal from '../../common/components/UI/QuickModal/QuickModal';
import styles from './styles';

class ViewSubmissionScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Submission',
  });

  onPressEdit = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onPressSubmit = () => {
    const { navigation, createSubmission } = this.props;
    let submission = {};
    let clearInput = () => {};
    if (navigation.state.params) {
      ({ submission } = navigation.state.params);
      ({ clearInput } = navigation.state.params);
    }

    const callbackAfterSubmission = () => {
      clearInput();

      QuickHint('Successfully submitted');
      navigation.navigate('Tab');
    };

    QuickModal('You will submit this complaint to request consult.', () => createSubmission(submission, callbackAfterSubmission));
  };

   formatDate = (dateString) => {
     const date = new Date(dateString);
     const monthNames = [
       'January', 'February', 'March',
       'April', 'May', 'June', 'July',
       'August', 'September', 'October',
       'November', 'December',
     ];

     const day = date.getDate();
     const monthIndex = date.getMonth();
     const year = date.getFullYear();

     return `${day} ${monthNames[monthIndex]} ${year}`;
   }

   render() {
     const { navigation, isCreatingSubmission } = this.props;

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
               <Text style={styles.key}>First Name:</Text>
               <Text>
                 {' '}
                 {submission.firstName}
               </Text>
             </View>
           </Notice>

           <Notice style={styles.innerNotice}>
             <View style={styles.rowContainer}>
               <Text style={styles.key}>Last Name:</Text>
               <Text>
                 {' '}
                 {submission.lastName}
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
             <View style={styles.rowContainer}>
               <Text style={styles.key}>Gender:</Text>
               <Text>
                 {' '}
                 {submission.gender}
               </Text>
             </View>
           </Notice>

           <Notice style={styles.innerNotice}>
             <View style={styles.rowContainer}>
               <Text style={styles.key}>Date of birth:</Text>
               <Text>
                 {' '}
                 {this.formatDate(submission.dateOfBirth)}
               </Text>
             </View>
           </Notice>

           {showActions && (
           <View style={styles.buttonsRowContainer}>
             <PrimaryButton onPress={this.onPressEdit}>Edit</PrimaryButton>
             <PrimaryButton
               backgroundColor={colors.primary}
               onPress={this.onPressSubmit}
               isLoading={isCreatingSubmission}
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
  isCreatingSubmission: PropTypes.bool,

  createSubmission: PropTypes.func,
};

const mapStateToProps = state => ({
  isCreatingSubmission: state.submission.isCreatingSubmission,
});

const mapDispatchToProps = {
  createSubmission: submissionActions.createSubmission,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewSubmissionScreen);
