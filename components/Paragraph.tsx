import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type TextProps = {
  value: string;
};

export default function Paragraph({ value }: TextProps) {
  return <Text style={styles.text}>{value}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})
