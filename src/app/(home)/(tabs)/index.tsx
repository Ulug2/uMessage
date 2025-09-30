import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { ChannelList } from "stream-chat-expo";

export default function MainTabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chats Screen</Text>
            <ChannelList onSelect={(channel) => { router.push(`/channel/${channel.cid}`) }} />
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