import { useAuth } from "@/src/providers/AuthProvider";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, router, Stack } from "expo-router";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ChannelList } from "stream-chat-expo";

export default function MainTabScreen() {

    const { user } = useAuth()

    if (!user){
        return <ActivityIndicator/>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Link href={'/(home)/users'} asChild>
                            <FontAwesome5 
                            name="users" 
                            size={24} 
                            color="black" 
                            style={{marginHorizontal: 15}}
                            />
                        </Link>
                        
                    )
                }}
            />
            <ChannelList
                filters={{ members: { $in: [user.id] } }}
                onSelect={(channel) => { router.push(`/channel/${channel.cid}`) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    }
});