import { StyleSheet, Text, View } from 'react-native';

export default function Partners() {
  return (
    <View style={styles.container}>
      <Text>Meus Parceiros com desconto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
