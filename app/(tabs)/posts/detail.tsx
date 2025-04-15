import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Routes, { PostStackParams, RootStackParams } from "../../../utils/Routes";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../network/axiosInstance";
import PostItem from "../../../network/entities/PostItem";
import PostEntity from "../../../network/entities/PostEntity";

export default function PostDetailScreen() {
  const route = useRoute<RouteProp<PostStackParams, Routes.PostDetail>>();
  const id = route?.params?.id;
  const title = route?.params?.title;
  const body = route?.params?.body;

  // const [postDetail, setPostDetail] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/posts/${id}")
  //     .then((response) => {
  //       setPostDetail(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    // <View style={{ flex: 1 }}>
    //   <PostItem post={postDetail} />
    
    //     </View>
    <View style={styles.root}>
    <Text>PostID - {id}</Text>
    <Text>PostTitle - {title}</Text>
    <Text>PostBody - {body}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
