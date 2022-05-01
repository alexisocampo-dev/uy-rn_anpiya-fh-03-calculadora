import React from 'react';
import {StatusBar, View} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <View style={styles.fondo}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculadoraScreen />
    </View>
  );
};

export default App;
