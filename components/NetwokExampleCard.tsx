import {StyleSheet, View, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper'
import Text from './Text';

type NetworkExampleCardProps = {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
};

const NetwokExampleCard = ({
  title = '',
  loading = false,
  onPress = () => {},
  children,
}: NetworkExampleCardProps) => {
  const theme = useTheme();

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.cardHeader,
          {
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        ]}>
        <Text style={[styles.cardTitle, {color: theme.colors.secondary}]}>{title}</Text>
        <Pressable
          style={({pressed}) => [
            styles.btnFire,
            {backgroundColor: pressed ? theme.colors.primary + '50' : theme.colors.primary},
          ]}
          onPress={onPress}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text variant="bodySmall" style={styles.btnFireText}>
              Fire
            </Text>
          )}
        </Pressable>
      </View>

      <View style={[styles.cardBody, {backgroundColor: theme.colors.background + '60'}]}>
        {children}
      </View>
    </View>
  );
};

export default NetwokExampleCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardBody: {
    backgroundColor: '#F8F7F7',
    // height: 150,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  btnFire: {
    width: 60,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2BBCA2',
    borderRadius: 12,
  },
  btnFireText: {
    fontSize: 14,
    color: '#fff',
  },
});
