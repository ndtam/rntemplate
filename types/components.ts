import {ReactNode} from 'react';
import {ViewStyle, StyleProp, TextInputProps, ViewProps, TextStyle} from 'react-native';

// Layout
export interface LayoutPropsType extends ViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

// MenuItem
export interface MenuItemPropsType {
  label: string;
  rightItem?: ReactNode;
  onPress: () => void;
}

// Card
export interface CardPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

// Input
export interface InputPropsType extends TextInputProps {
  style?: StyleProp<TextStyle>;
  error?: string;
  [key: string]: any;
}
