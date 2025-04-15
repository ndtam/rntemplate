import { Link, router } from "expo-router";
import React, { useState } from "react";

import Background from "../../../../components/Background";
import Logo from "../../../../components/Logo";
import Header from "../../../../components/Header";
import Button from "../../../../components/Button";
import Paragraph from "../../../../components/Paragraph";

export default function UserScreen() {
  return (
    <Background>
      <Logo />
      <Header value="Login Template" />
      <Paragraph value="The easiest way to start with your amazing application." />
      <Button
        mode="contained"
        onPress={() => router.navigate("/(tabs)/setting/users/LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => router.navigate("/(tabs)/setting/users/RegisterScreen")}
      >
        Sign Up
      </Button>
    </Background>
  );
}
