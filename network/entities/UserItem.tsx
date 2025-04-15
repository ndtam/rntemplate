import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {User} from "../../redux/userSlice";
import Routes, { UserStackParams } from "../../utils/Routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { Link } from "expo-router";

interface UserItemProps {
  post: User;
}

const UserItem = ({ post }: UserItemProps) => {
  const { name, useName, token } = post;
  // const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<UserStackParams>>();
  const onPress = () => {
    navigation.navigate(Routes.HomeDetail, { name: name, username: useName, token: token });
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.body}>{useName}</Text>
          <Text style={styles.body}>{token}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default UserItem;

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
