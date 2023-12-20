import { store } from "@/context/store";
import HomeScreen from "@/screens/HomeScreen";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </SafeAreaProvider>
  );
}
