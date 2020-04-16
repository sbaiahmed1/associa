import React, {Component} from 'react';
import RootNavigator from './src/views/rootNavigator/rootNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator animating={true} />}
          persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
