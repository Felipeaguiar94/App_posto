import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="tela_inicial">
      <Stack.Screen
        name="tela_inicial"
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
