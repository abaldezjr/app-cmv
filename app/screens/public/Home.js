import { StyleSheet, Text, View } from 'react-native';

import Partners from './Partners';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Partners />
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
