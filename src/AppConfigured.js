import { Provider } from 'react-redux';
import { Root } from 'native-base';
import React from 'react';

import { loadFonts } from './assets/fonts/loadFonts';
import MainNavigator from './routes/MainNavigator';
import store from './store/createStore';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Native Base Root
// 3- Redux

export default class AppConfigured extends React.Component {
  componentDidMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async () => {
    await Promise.all(loadFonts);
  };

  render() {
    return (
      <Provider store={store}>
        <Root>
          <MainNavigator />
        </Root>
      </Provider>
    );
  }
}
