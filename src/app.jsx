import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/rootNavigator';
import AppStoreProvider from './redux/stores/provider';

// This is the main component that renders the entire app.
export default App = () => {
    return (
        <SafeAreaProvider>
            <AppStoreProvider> // Handles global state management
                <RootNavigator /> // Contains navigation logic and screens
            </AppStoreProvider>
        </SafeAreaProvider>
    );
};
