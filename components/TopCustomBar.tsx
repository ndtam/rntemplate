import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TextInput from "../components/TextInput";

type TopCustomBarProps = {
  title: string;
  goBack: () => void;
};

export default function TopCustomBar({ title, goBack }: TopCustomBarProps) {
  const [email, setEmail] = useState({ value: "", error: "" });
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => goBack()} style={styles.button}>
        <Image
          style={styles.image}
          source={require("../assets/images/arrow_back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goBack()} style={styles.button}>
        <Text style={styles.buttonLabel}>Any view with action from Props</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>Title text content: {title}</Text>
      {/* <TextInput
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text: string) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            /> */}
    </View>

    // <View style={styles.container}>
    //   <TouchableOpacity onPress={() => goBack()} style={styles.button}>
    //     <Image
    //       style={styles.image}
    //       source={require("../assets/images/arrow_back.png")}
    //     />
    //   </TouchableOpacity>
    //   <Text style={styles.title}>{title}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  container: {
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
  },

  image: {
    width: 24,
    height: 24,
  },
  title: {
    backgroundColor: "#7cb48f",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
