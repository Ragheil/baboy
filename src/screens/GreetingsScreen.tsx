import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GreetingsScreen: React.FC = () => {
  const [farmName, setFarmName] = useState('');

  const handleEnter = () => {
    // Implement enter logic here
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <TextInput
        placeholder="Farm Name"
        value={farmName}
        onChangeText={setFarmName}
        style={styles.input}
      />
      <Button title="Enter" onPress={handleEnter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
});

export default GreetingsScreen;
