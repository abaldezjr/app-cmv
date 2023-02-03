import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@rneui/base';

export default function Profile({ navigation }) {

  function admin() {
    navigation.navigate('Admin');
  }

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Button
        title="Entrar no Admin"
        onPress={() => admin()}
      />
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
