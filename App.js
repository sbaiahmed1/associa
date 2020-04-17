import React, {Component, useState, useEffect} from 'react';
import RootNavigator from './src/views/rootNavigator/rootNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {WaveIndicator} from 'react-native-indicators';
function Loader(props) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    handleLoad;
  }, []);
  return <WaveIndicator animating={isLoading} />;
}

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
