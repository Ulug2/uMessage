import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Profile {
    id: string;
    username: string;
    full_name: string;
    avatar_url?: string;
}

interface UserListItemProps {
    user: Profile;
    onPress?: () => void;
}

const UserListItem = ({ user, onPress }: UserListItemProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.avatarContainer}>
                {user.avatar_url ? (
                    <Image 
                        source={{ uri: user.avatar_url }} 
                        style={styles.avatar}
                    />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarText}>
                            {user.full_name.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                )}
            </View>
            
            <View style={styles.userInfo}>
                <Text style={styles.fullName}>{user.full_name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e5e9',
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
    },
    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userInfo: {
        flex: 1,
    },
    fullName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    username: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
});

export default UserListItem;