import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, FlatList, View, TextInput, ActivityIndicator, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper'

import {taskAdded, taskToggled} from '../../redux/tasksSlice';
import {RootState} from '../../store/store';
import {Task} from '../../redux/tasksSlice';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ListItem from '../../components/ListItem';
import {Button} from '../../components/Button/Button';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

export default function TaskScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  const theme = useTheme();

  const inputRef = useRef<TextInput>(null);

  const todoList = useSelector((state: RootState) => state.todos.entities);
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const addNewTask = () => {
    let temp = text.trim();
    if (temp !== '') {
      dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
    }
    inputRef.current?.clear();
  };

  const onCheckedHandler = (id: string) => {
    dispatch(taskToggled(id));
  };

  const renderItem = ({item, index}: {item: Task; index: number}) => (
    <ListItem item={item} index={index} onPress={onCheckedHandler} />
  );

  const keyExtractor = (item: Task) => `task-${item.id}`;


  return (
    // <View style={{flex: 1, padding: 24}}>
    //   {isLoading ? (
    //     <ActivityIndicator />
    //   ) : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({id}) => id}
    //       renderItem={({item}) => (
    //         <Text>
    //           {item.title}, {item.releaseYear}
    //         </Text>
    //       )}
    //     />
    //   )}
    // </View>
    <Layout testID="Screen.Tasks">
      {/* Tasks Listing starts here */}
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
      {/* Tasks Listing ends here */}

      <Card
        style={[styles.inputCard, {borderTopColor: theme?.colors.surface}]}>
        {/* TextInput and InputButton starts here */}
        <View style={styles.inputBtnRow}>
          <TextInput
            testID="Tasks.newTaskInput"
            ref={inputRef}
            placeholder="New Task"
            placeholderTextColor={theme?.colors.secondary}
            style={[
              styles.input,
              {
                color: theme?.colors.primary,
                backgroundColor: theme?.colors.background,
                borderColor: theme?.colors.surface,
              },
            ]}
            onChangeText={t => setText(t)}
            onSubmitEditing={() => addNewTask()}
          />
          <Button onPress={addNewTask} style={styles.btnAdd}>
            <Icon name="checkmark-sharp" size={20} color={theme.colors.background} />
          </Button>
        </View>
        {/* TextInput and InputButton ends here */}
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  ctivityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  tickIcon: {
    width: 22,
    height: 22,
  },
  inputCard: {
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBtnWrp: {
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 45,
    backgroundColor: '#f6f6f6',
  },
  btnAdd: {
    borderRadius: 5,
    padding: 6,
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    height: 42,
    marginLeft: 5,
  },
  btnAddText: {
    color: '#fff',
    fontSize: 14,
  },
  btnClear: {
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#c50e29',
    marginRight: 8,
  },
  btnClearText: {
    color: '#c50e29',
    fontSize: 14,
  },
});
