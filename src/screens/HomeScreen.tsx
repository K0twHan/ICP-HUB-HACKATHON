import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = (screen: string) => {
    navigation.navigate(screen as never);
  };

  const handleConnectPhantom = () => {
    // Burada Phantom Wallet bağlantı işlemi yapılacak
    alert('Phantom Wallet Bağlandı!');
  };

  return (
    


    <View style={styles.container}>
      <Text style={styles.title}>Giriş Sayfası</Text>
      <TouchableOpacity style={styles.connectButton} onPress={handleConnectPhantom}>
        <Text style={styles.connectButtonText}>Phantom Wallet Bağla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('IlacSorgula')}>
        <Text style={styles.buttonText}>İlaç Sorgula</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('IlaciTeslimAl')}>
        <Text style={styles.buttonText}>İlacı Teslim Al</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('IlaciYonet')}>
        <Text style={styles.buttonText}>İlacı Yönet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  connectButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0056b3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HomeScreen;


