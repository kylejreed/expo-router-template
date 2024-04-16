import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

import { useColorScheme } from "./useColorScheme";

export default function usePreload(onLoaded: () => void) {
    const colorSchemeLoaded = useLoadColorScheme();
    const [fontLoaded, fontError] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    const loaded = colorSchemeLoaded && fontLoaded;
    const error = fontError;

    useEffect(() => {
        if (error) throw error; // Trigger error boundary
    }, [error]);

    useEffect(() => {
        if (loaded) {
            onLoaded();
        }
    }, [loaded]);

    return loaded;
}

const useLoadColorScheme = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const theme = await AsyncStorage.getItem('theme');
            if (Platform.OS === 'web') {
                // Adds the background color to the html element to prevent white background on overscroll.
                document.documentElement.classList.add('bg-background');
            }
            if (!theme) {
                AsyncStorage.setItem('theme', colorScheme);
                setIsColorSchemeLoaded(true);
                return;
            }
            const colorTheme = theme === 'dark' ? 'dark' : 'light';
            if (colorTheme !== colorScheme) {
                setColorScheme(colorTheme);

                setIsColorSchemeLoaded(true);
                return;
            }
            setIsColorSchemeLoaded(true);
        })();
    }, []);

    return isColorSchemeLoaded;
}
