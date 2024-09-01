import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const IlacSorgulaScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string | null>(null);

  const handleConfirm = () => {
    setDisplayText(text);
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
      {displayText && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{displayText}</Text>
        </View>
      )}
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
});

export default IlacSorgulaScreen;
