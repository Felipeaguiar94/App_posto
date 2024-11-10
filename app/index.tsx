import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function TelaInicial() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/tela_inicial');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image 
        source={require('../assets/images/sus.png')} 
        style={styles.image}
      />
      <Text style={styles.text}>BEM-VINDO AO BUSCA SUS!</Text>
      <Text style={styles.subtitle}>Seu app para encontrar saude</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  image: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

