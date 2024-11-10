import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import cidades from "@/assets/json/cidades";
import postos from '@/assets/json/postos';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function () {
  const [selectedCityId, setSelectedCityId] = useState(0);
  const [postosData] = useState(postos());

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.label}>Selecione uma cidade:</Text>
      <Picker
        selectedValue={selectedCityId}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCityId(itemValue)} 
      > 
        <Picker.Item key="0" label="Selecione uma cidade" value="0" />
        {cidades().map((cidade) => (
          <Picker.Item 
            key={cidade.id}  
            label={`${cidade.nome} - ${cidade.estado}`} 
            value={cidade.id} 
          />
        ))}
      </Picker>
      
      <Text style={styles.label}>Postos de saúde:</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedCityId !== 0 && postosData[0][selectedCityId] && postosData[0][selectedCityId].map((posto) => (
          <View key={posto.id} style={styles.postoContainer}>
            <Text style={styles.text}>{posto.nome}</Text>
            <Text style={styles.text}>{posto.endereço}</Text>
            <Text style={styles.text}>{posto.localização}</Text>
            <Text style={styles.text}>{posto["Horário de funcionamento"]}</Text>
            <Link href={posto.link} target='_blank' style={styles.link}>link do maps</Link>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: '10%',
    marginBottom: '10%',
    backgroundColor: '#4A90E2', 
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff', 
  },
  picker: {
    height: 50,
    width: 200,
    color: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center', 
  },
  postoContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 250, 
  },
  link: {
    color: '#2ECC71',
    textDecorationLine: 'underline',
  },
  text: {
    color: '#fff', 
  },
});
