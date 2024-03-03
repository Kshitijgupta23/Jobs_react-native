import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadResourcesAsync = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                if (fontsLoaded) {
                    await SplashScreen.hideAsync();
                    setIsReady(true);
                }
            } catch (e) {
                console.warn(e);
            }
        };
        loadResourcesAsync();
    }, [fontsLoaded]);

    if (error) {
        console.error('Failed to load fonts:', error);
    }

    if (!isReady) {
        // You might want to render a loading indicator here
        return null;
    }

    return <Stack />;
};

export default Layout;
