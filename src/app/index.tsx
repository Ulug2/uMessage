import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {

    
    return (
        <Redirect href={'/(auth)/login'}/>
            // <View style={styles.content}>
            //     <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
            // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    subtitle: {
        fontSize: 16,
        color: '#666'
    }
});

export default HomeScreen;