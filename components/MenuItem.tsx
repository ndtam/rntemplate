import * as React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-paper'
import {MenuItemPropsType} from '../types/components';

import Text from './Text';

const MenuItem = ({
  label = 'Menu Item',
  onPress,
  rightItem,
}: MenuItemPropsType) => {
  const theme = useTheme();
  return (
    <Pressable
      style={[styles.menuItem, {borderTopColor: theme.colors.background}]}
      onPress={onPress}>
      <View>
        <Text>{label}</Text>
      </View>
      <View>{rightItem}</View>
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
});
