import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
}

export const BotonCalc = ({texto, color = '#2D2D2D', ancho = false}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#FF9427' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
