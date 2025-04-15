import * as React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper'
import Card from './Card';

interface TaskItemType {
  id: string;
  title: string;
  done: boolean;
}

interface ListItemType {
  item: any;
  index?: number;
  onPress: (arg0: any) => void;
}

const ListItem = ({item, onPress}: ListItemType): JSX.Element => {
  const theme = useTheme();

  return (
    <Card style={styles.card}>
      <Pressable
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.row, {opacity: item.done ? 0.3 : 1}]}
        accessibilityLabel={
          item.done ? 'Tap to uncheck from list' : 'Tap to check from list'
        }
        accessibilityHint="Toggles task done and undone"
        accessibilityRole="radio"
        accessibilityState={{checked: item.done}}
        onPress={() => onPress(item.id)}>
        <Text>
          {item.title}
        </Text>
        <Icon
          name="checkbox"
          size={20}
          color={item.done ? theme.colors.primary : '#CECECE'}
        />
      </Pressable>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
});
