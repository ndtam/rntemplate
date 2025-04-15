import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../../../components/Background";
import Logo from "../../../../components/Logo";
import Header from "../../../../components/Header";
// import Button from "../../../../components/Button";
import { Button } from 'react-native-paper';
import TextInput from "../../../../components/TextInput";
import BackButton from "../../../../components/BackButton";
import { emailValidator } from "../../../../helpers/emailValidator";
import { passwordValidator } from "../../../../helpers/passwordValidator";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    router.navigate("/(tabs)/setting/users/Dashboard");
  };

  return (
    <Background>
      <BackButton goBack={router.back} />
      <Logo />
      <Header value="Welcome back." />
      <TextInput
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
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} style={styles.noRadius}>
            Login
          </Button>
      {/* <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button> */}
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.replace('/setting/users/LoginScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
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
  })

