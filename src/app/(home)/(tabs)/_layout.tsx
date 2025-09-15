import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";


export default function TabsNavigator(){
    return (
        <Tabs>
            <Tabs.Screen 
                name='index' 
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'chatbox' : 'chatbox-outline'} // Use different icons for focused/unfocused states
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name='profile' 
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'} // Change icon based on focus
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}