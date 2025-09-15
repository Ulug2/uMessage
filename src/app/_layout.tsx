// _layout.tsx is a root layout, which means expo router first renders _layout.tsx

// Define global providers
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout(){
    return (
        <GestureHandlerRootView style={{flex:1}}>
            <Slot/>
        </GestureHandlerRootView>
    )
}
