import { StyleSheet, Text, View } from 'react-native';

export default function CRUDPartners() {
  return (
    <View style={styles.container}>
      <Text>Manter Empresas</Text>
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
