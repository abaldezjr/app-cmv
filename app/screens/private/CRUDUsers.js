import { StyleSheet, Text, View } from 'react-native';

export default function CRUDUsers() {
  return (
    <View style={styles.container}>
      <Text>Manter Usuarios</Text>
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
