import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
  View,
  Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import UserItem from "@/network/entities/UserItem";
import { useTheme } from 'react-native-paper'

const theme = useTheme();

export default function HomeScreen() {

  const userList = useSelector((state: RootState) => state.user.entities);

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Add style={{flex: 1}} for each View element who is a parent for FlatList */}
      <View style={[styles.root, { flex: 1 }]}>
        <Text>Màn hình hiển thị all user create from Setting - Sing up</Text>
        <Text>Data lưu local với Async Storage</Text>
          <FlatList
            data={userList}
            renderItem={({ item }) => <UserItem post={item} />}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: theme.colors.tertiary,
  },

  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  fontBlack: {
    fontFamily: "Black",
    marginTop: 20,
    fontSize: 20,
  },
});
