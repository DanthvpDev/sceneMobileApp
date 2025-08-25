import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    ArchivoBlack: require("../assets/fonts/ArchivoBlack-Regular.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins-Italic.ttf"),
    PoppinsSemibold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiboldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SafeAreaView className='h-full dark:bg-midnight-blue'>
      <Slot />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
