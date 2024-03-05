import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins"
import { StatusBar } from "expo-status-bar"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  })

  if (!fontsLoaded) {
    return
  }

  SplashScreen.hideAsync()

  return (
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  )
}
