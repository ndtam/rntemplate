import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type TextProps = {
  value: string;
};

export default function Header({ value }: TextProps) {
  return <Text style={styles.header}>{value}</Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
