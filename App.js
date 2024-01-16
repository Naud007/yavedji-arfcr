import 'expo-dev-client';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Navigation from './navigation/navigation';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';

// import SnackBar from './src/components/tool_/snackBar';
import SnackBarComponent from './src/components/tool_/snackBar';
import GlobalColors from './src/styles/globalColors';
import * as NavigationBar from 'expo-navigation-bar';

SplashScreen.preventAutoHideAsync();

const Store = configureStore();
const persistor = persistStore(Store);
const queryClient = new QueryClient();

export default function App() {
  const [isAppSet, setIsAppSet] = useState(false);

  NavigationBar.setBackgroundColorAsync("#F6F8FF");
  NavigationBar.setButtonStyleAsync("dark");

  useEffect(() => {
    console.log(GlobalColors);

    async function prepare() {
      try {
        await Font.loadAsync({
          "Inter-ExtraBold": require("./assets/Fonts/Inter/Inter-ExtraBold.ttf"),
          "Inter-Medium": require("./assets/Fonts/Inter/Inter-Medium.ttf"),
          "Inter-Bold": require("./assets/Fonts/Inter/Inter-Bold.ttf"),
          "Inter-SemiBold": require("./assets/Fonts/Inter/Inter-SemiBold.ttf"),
          "Inter-Regular": require("./assets/Fonts/Inter/Inter-Regular.ttf"),
          "Inter-Light": require("./assets/Fonts/Inter/Inter-Light.ttf"),
          "Inter-Thin": require("./assets/Fonts/Inter/Inter-Thin.ttf"),
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppSet(true);
      }
    }

    prepare()
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppSet) {
      await SplashScreen.hideAsync();
    }
  }, [isAppSet]);

  if (!isAppSet) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>

      <Provider store={Store}>

        <PersistGate persistor={persistor}>

          <PaperProvider theme={{ colors: GlobalColors }}>

            <QueryClientProvider client={queryClient}>

              <GestureHandlerRootView style={styles.container}>
                <Navigation />
                <StatusBar style="auto" height={24} />
                <SnackBarComponent />
              </GestureHandlerRootView>

            </QueryClientProvider>

          </PaperProvider>

        </PersistGate>

      </Provider>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.light,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
