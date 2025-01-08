import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      primary: '#007AFF',
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
