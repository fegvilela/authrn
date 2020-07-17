import React, { useContext } from 'react';
import {View, Button, StyleSheet} from 'react-native';

import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signed, signIn, user} = useContext(AuthContext);
  console.log(signed);
  console.log(user);


  async function handleSign() {
    // email, password (formulário omitido)
    signIn();
  }

  return(
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSign} />
    </View>
  );
}

export default SignIn;

