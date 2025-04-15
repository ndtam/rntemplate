import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {InputPropsType} from '../types/components';
import { useTheme } from 'react-native-paper'

const Input = ({style, error, ...rest}: InputPropsType) => {
  const theme = useTheme();
  return (
    <View style={styles.inputWrp}>
      <TextInput
        {...rest}
        style={[
          styles.input,
          {color: theme.colors.tertiary, borderColor: theme.colors.outline},
        
        ]}
      />
      {error ? (
        <Text
          testID={rest.testID + '-error'}
          style={[styles.error, {color: theme.colors.error}]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  inputWrp: {
    marginBottom: 16,
  },
  input: {
    height: 45,
    borderColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
  },
  error: {
    fontSize: 12,
  },
});
