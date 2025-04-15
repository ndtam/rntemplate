import React from 'react'
import Background from '../../../../components/Background'
import Logo from '../../../../components/Logo'
import Header from '../../../../components/Header'
import Paragraph from '../../../../components/Paragraph'
import Button from '../../../../components/Button'
import { Link, router } from "expo-router";

export default function Dashboard() {
  return (
    <Background>
      <Logo />
      <Header value='Let’s start'/>
      <Paragraph value='Your amazing app starts here. Open you favorite code editor and start
        editing this project.'/>
      <Button
        mode="outlined"
        onPress={() =>
          router.replace("/(tabs)/setting/users")
        }
      >
        Go to Login
      </Button>
    </Background>
  )
}
