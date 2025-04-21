import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

interface TextInputProps {
  title?: string;
  errorText?: string;
  description?: string;
  [key: string]: any;
}

export default function TextInput({ title, errorText, description, ...props }: TextInputProps) {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      {title ? (
        <Text style={styles.description}>{title}</Text>
      ) : null}
      
      <Input
        style={styles.input}
        selectionColor={'#560CCE'}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#560CCE',
  },
  description: {
    fontSize: 13,
    color: '#414757',
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: '#f13a59',
    paddingTop: 8,
  },
})
