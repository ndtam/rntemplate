import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardPropsType} from '../types/components';
import { useTheme } from 'react-native-paper'

const Card = ({children, style}: CardPropsType) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.card,
        {backgroundColor: theme.colors.background, borderColor: theme.colors.outline},
        style,
      ]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
});

// IntrinsicAttributes
