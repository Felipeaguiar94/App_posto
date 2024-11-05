import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import cidades from "@/assets/json/cidades";
import postos from '@/assets/json/postos';
import { Link } from 'expo-router';

export default function Index() {
  const [selectedCityId, setSelectedCityId] = useState(0);
  const [postosData] = useState(postos()); // Assume que postos() retorna o array de postos

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione uma cidade:</Text>
      <Picker
        selectedValue={selectedCityId}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCityId(itemValue)} // Aqui pegamos o ID da cidade
      > 
        <Picker.Item key="0" label="Selecione uma cidade" value="0" />
        {cidades().map((cidade) => (
          <Picker.Item 
            key={cidade.id}  
            label={`${cidade.nome} - ${cidade.estado}`} 
            value={cidade.id} // Usando o id da cidade como valor
          />
        ))}
      </Picker>
      
      <Text style={styles.label}>Postos de saúde:</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedCityId !== 0 && postosData[0][selectedCityId] && postosData[0][selectedCityId].map((posto) => ( // Adicionando verificação para evitar erro
          <View key={posto.id} style={styles.postoContainer}>
            <Text>{posto.nome}</Text>
            <Text>{posto.endereço}</Text>
            <Text>{posto.localização}</Text>
            <Text>{posto["Horário de funcionamento"]}</Text>
            <Link href={posto.link} target='_blank'>{posto.link}</Link>
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
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center', // Centraliza os itens na scroll view
  },
  postoContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%', // Faz com que o container dos postos ocupe toda a largura
  },
});
