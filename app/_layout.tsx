import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";

import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import usePreload from "@/hooks/usePreload";
import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";

export { ErrorBoundary } from 'expo-router'; // Catch errors

export const unstable_settings = {
    initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const loaded = usePreload(() => SplashScreen.hideAsync());
    const { isDarkMode: isDarkColorScheme } = useColorScheme();

    if (!loaded) return null;

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
            <Stack />
        </ThemeProvider>
    );
}
