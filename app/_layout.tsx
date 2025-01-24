import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Startseite"}} />
      <Stack.Screen name="DC" options={{ title: "DC", headerShown: false  }} />
      <Stack.Screen name="Marvel" options={{ title: "Marvel", headerShown: false  }} />
      <Stack.Screen name="Bewertungen" options={{ title: "Bewertungen", headerShown: false  }} />
      <Stack.Screen name="Aquaman" options={{ title: "Aquaman", headerShown: false  }} />
      <Stack.Screen name="Batman" options={{ title: "Batman", headerShown: false  }} />
      <Stack.Screen name="Flash" options={{ title: "Flash", headerShown: false   }} />
      <Stack.Screen name="GreenLantern" options={{ title: "GreenLantern", headerShown: false  }} />
      <Stack.Screen name="Superman" options={{ title: "Superman", headerShown: false  }} />
      <Stack.Screen name="WonderWoman" options={{ title: "WonderWoman", headerShown: false  }} />
      <Stack.Screen name="CaptainAmerica" options={{ title: "CaptainAmerica", headerShown: false  }} />
      <Stack.Screen name="Hulk" options={{ title: "Hulk", headerShown: false  }} />
      <Stack.Screen name="IronMan" options={{ title: "IronMan", headerShown: false  }} />
      <Stack.Screen name="Spiderman" options={{ title: "Spiderman", headerShown: false  }} />
      <Stack.Screen name="Thor" options={{ title: "Thor", headerShown: false  }} />
      <Stack.Screen name="Wolverine" options={{ title: "Wolverine", headerShown: false  }} />
    </Stack>
  );
}

