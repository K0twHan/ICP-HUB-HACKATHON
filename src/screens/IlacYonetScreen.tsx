import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const IlaciYonetScreen: React.FC = () => {
  const [barcode, setBarcode] = useState<string>('');
  const [inputFields, setInputFields] = useState<string[]>(['']); // Başlangıçta bir input alanı
  const [confirmedData, setConfirmedData] = useState<string | null>(null);

  // Barkod inputunu güncelleme fonksiyonu
  const handleBarcodeChange = (text: string) => {
    setBarcode(text);
  };

  // Dinamik inputları güncelleme fonksiyonu
  const handleInputChange = (index: number, text: string) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = text;
    setInputFields(newInputFields);
  };

  // ICPHackathon input ekleme fonksiyonu
  const addInputField = () => {
    setInputFields([...inputFields, '']);
  };

  // Bir input silme fonksiyonu
  const removeInputField = (index: number) => {
    const newInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newInputFields);
  };

  // Rotayı onayla fonksiyonu
  const handleConfirm = () => {
    const inputData = inputFields.join(', ');
    const confirmationMessage = `Barkod: ${barcode}\nGirişler: ${inputData}`;

    Alert.alert('Rota Onaylandı!', 'Rota onaylandı!', [
      { text: 'OK' }
    ]);

    setConfirmedData(confirmationMessage);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.barcodeInput}
        placeholder="İlaç Barkodunu Girin"
        value={barcode}
        onChangeText={handleBarcodeChange}
      />
      {inputFields.map((field, index) => (
        <View key={index} style={styles.inputWrapper}>
          <TouchableOpacity onPress={() => removeInputField(index)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>×</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder={`İstasyon Noktası ${index + 1}`}
            value={field}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={addInputField}>
        <Text style={styles.addButtonText}>ICPHackathon İstasyon Ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Rotayı Onayla</Text>
      </TouchableOpacity>
      {confirmedData && (
        <View style={styles.confirmedDataContainer}>
          <Text style={styles.confirmedDataText}>{confirmedData}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  barcodeInput: {
    width: '100%',
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  removeButton: {
    padding: 10,
    backgroundColor: '#FF4D4D',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmButton: {
    padding: 15,
    backgroundColor: '#28A745',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmedDataContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  confirmedDataText: {
    fontSize: 18,
    color: '#333',
  },
});

export default IlaciYonetScreen;
