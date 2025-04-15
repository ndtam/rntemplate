import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton, useTheme } from 'react-native-paper'

export type ButtonProps = {
  mode?: 'text' | 'outlined' | 'contained';
  style?: object; [key: string]: any
};

export default function Button({ mode, style, ...props }: ButtonProps) {
  const theme = useTheme();
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.background },
        style,
      ]}
      labelStyle={styles.text}
      {...props}
    >
      {props.children}
    </PaperButton>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
