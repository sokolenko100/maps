import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/rootNavigator';
import AppStoreProvider from './redux/stores/provider';

export default App = () => {
    return (
        <SafeAreaProvider>
            <AppStoreProvider>
                <RootNavigator />
            </AppStoreProvider>
        </SafeAreaProvider>
    );
};
