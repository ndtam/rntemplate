import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper'

import {LayoutPropsType} from '../types/components';

const Layout = ({children, style, ...rest}: LayoutPropsType) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <StatusBar
        animated
        backgroundColor={theme.colors.background}
        barStyle={theme?.dark ? 'dark-content' : 'light-content'}
      />
      <View
        testID="Layout.LayoutContainer"
        style={[styles.layout, {backgroundColor: theme?.colors.background}, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {flex: 1},
  layout: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
