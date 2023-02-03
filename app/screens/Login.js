import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import userService from '../services/UserService';
import styles from '../styles/MainStyle';


export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }]
    });
  }

  function register() {
    navigation.navigate('Register');
  }

  return (
    <View>

      <>
        <Text h3>Cartão Mais Você</Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <Input
          placeholder="Sua senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />

        <Button
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
            />
          }
          title="Entrar"
          onPress={() => login()}
        />


        <Button
          icon={
            <Icon
              name="user"
              size={15}
              color="white"
            />
          }
          title=" Cadastrar"
          onPress={() => register()}
        />
      </>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
