import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Routes, {
  PostStackParams,
  RootStackParams,
} from "../../../utils/Routes";
import React, { useEffect, useState } from "react";

import Background from "../../../components/Background";
import Logo from "../../../components/Logo";
import Header from "../../../components/Header";
import { Button } from "react-native-paper";
import TextInput from "../../../components/TextInput";
import BackButton from "../../../components/BackButton";
import { Link, router } from "expo-router";
import TopCustomBar from "@/components/TopCustomBar";

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

    <>
    <TopCustomBar title={route.name} goBack={router.back} />
    <Background>
      <Logo />
      <Header value="Post detail." />
      <Text>PostID - {id}</Text>
      <Text>PostTitle - {title}</Text>
      <Text>PostBody - {body}</Text>
    </Background>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: '#414757',
  },
  link: {
    fontWeight: 'bold',
    color: '#560CCE',
  },
  noRadius: {
    borderRadius: 0,
  },
});
