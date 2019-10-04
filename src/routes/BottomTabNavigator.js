// import { createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Icon } from 'native-base';
import { colors, sizes, fontSizes } from '../assets/styles/base';
import AllSubmissionsScreen from '../screens/TabScreens/AllSubmissions';
import NewSubmissionScreen from '../screens/TabScreens/NewSubmission';

export default createMaterialTopTabNavigator(
  {
    NewSubmission: {
      screen: NewSubmissionScreen,
      // --specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: 'New Submission',
        tabBarIcon: () => (
          <Icon
            type="FontAwesome"
            name="paper-plane"
            size={fontSizes.lg}
            style={{ color: colors.secondary }}
          />
        ),
      },
    },
    AllSubmissions: {
      screen: AllSubmissionsScreen,
      navigationOptions: {
        tabBarLabel: 'All Submissions',
        tabBarIcon: () => (
          <Icon
            type="FontAwesome"
            name="th-list"
            size={fontSizes.lg}
            style={{ color: colors.secondary }}
          />
        ),
      },
    },
  },
  {
    // Config

    initialRouteName: 'NewSubmission',
    order: ['NewSubmission', 'AllSubmissions'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.secondary,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000',
      },
      labelStyle: {},
      iconStyle: {},
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
);
