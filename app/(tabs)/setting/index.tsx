import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import Button from "../../../components/Button";

export default function SettingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Setting screen!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <Link href="/setting/users"> View user (id inline)</Link>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        or using button custom layout
      </ThemedView>
      <Button
        mode="outlined"
        onPress={() => router.navigate("/setting/users")}
      >
        Login screen go
      </Button>

      <ThemedView style={styles.titleContainer}>
        <Pressable onPress={() => router.navigate("/setting/profile")}>
          <ThemedText>View profile (imperative)</ThemedText>
        </Pressable>
      </ThemedView>
      {/* <ThemedView style={styles.titleContainer}>
      <Pressable onPress={() => router.navigate('/posts', { postID: '123' })}>
        <ThemedText>View user (imperative)</ThemedText>
      </Pressable>
        <HelloWave />
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
