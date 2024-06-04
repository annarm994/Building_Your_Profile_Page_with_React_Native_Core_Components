import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Image Display */}
      <Image
        source={{ uri: 'https://t4.ftcdn.net/jpg/06/26/62/03/360_F_626620350_xg93nBHDvYDG9tkddfzV45CblAdZzDsA.jpg' }}
        style={styles.image}
      />

      {/* Information Section */}
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 1</Text>
        <Text style={styles.infoText}>Information 2</Text>
        <Text style={styles.infoText}>Information 3</Text>
        <Text style={styles.infoText}>Information 4</Text>
        <Text style={styles.infoText}>Information 5</Text>
      </ScrollView>

      {/* Input Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your comment"
          multiline={true}
          numberOfLines={4}
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default App;
