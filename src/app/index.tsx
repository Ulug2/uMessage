import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <Redirect href={'/(home)/(tabs)'}/>
        //     <View style={styles.content}>
        //         <Text style={styles.title}>Home Screen</Text>
        //         <Text style={styles.subtitle}>Welcome to Messenger App!</Text>
        //     </View>
        // </SafeAreaView>
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