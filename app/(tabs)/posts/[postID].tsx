import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Routes, { PostStackParams, RootStackParams } from "../../../utils/Routes";

export default function PostDetailScreen() {
  const route = useRoute<RouteProp<PostStackParams, Routes.PostDetail>>();
  const id = route?.params?.id;
  const title = route?.params?.title;
  const body = route?.params?.body;

  return (
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
