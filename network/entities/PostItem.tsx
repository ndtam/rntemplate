import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PostEntity from "./PostEntity";
import Routes, { PostStackParams } from "../../utils/Routes";
import { StackNavigationProp } from "@react-navigation/stack";

interface PostItemProps {
  post: PostEntity;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, body } = post;
  // const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<PostStackParams>>();
  const onPress = () => {
    navigation.navigate(Routes.PostDetail, { id: post.id, title: title, body: body });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});
