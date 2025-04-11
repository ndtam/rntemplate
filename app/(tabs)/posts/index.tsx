import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import axiosInstance from "../../../network/axiosInstance";
import PostItem from "../../../network/entities/PostItem";

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Add style={{flex: 1}} for each View element who is a parent for FlatList */}
      <View style={[styles.root, { flex: 1 }]}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostItem post={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
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
