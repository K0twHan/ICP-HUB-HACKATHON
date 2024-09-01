import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const IlacSorgulaScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const handleConfirm = () => {
    setDisplayText(text);
  };

  const handleQRCodeRead = (e: any) => {
    setText(e.data);
    setDisplayText(e.data);
    setIsScanning(false); // Stop scanning after successful read
  };

  const handleQRCodeButtonPress = () => {
    setIsScanning(true); // Start scanning
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Barkod'u girin"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Onayla</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.qrButton} onPress={handleQRCodeButtonPress}>
        <Text style={styles.buttonText}>QR Kod Oku</Text>
      </TouchableOpacity>
      {displayText && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{displayText}</Text>
        </View>
      )}
      <Modal
        visible={isScanning}
        transparent={true}
        onRequestClose={() => setIsScanning(false)}
      >
        <View style={styles.modalContainer}>
          <QRCodeScanner
            onRead={handleQRCodeRead}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent={<Text style={styles.modalText}>QR kodu tarayın</Text>}
            bottomContent={
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsScanning(false)}>
                <Text style={styles.buttonText}>Kapat</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android için gölge
  },
  button: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android için gölge
  },
  qrButton: {
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android için gölge
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    padding: 15,
    backgroundColor: '#dc3545',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default IlacSorgulaScreen;
