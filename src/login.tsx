import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme,HelperText} from 'react-native-paper';
import AppDialog from './AppDialog';

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();
  const [dialogVisible, setDialogVisible] = useState(false);

  const hideDialog = () => setDialogVisible(false);


  const handleLogin = () => {
    // Check if the credentials match 'admin'
    if (userId === 'admin' && password === 'admin') {
      navigation.navigate("TabScreen");
    } else {
      setDialogVisible(true);
    }
  };

  function hasErrors() {
    return userId.length < 5 && userId.length > 0
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.primary }]}>Login</Text>
      <TextInput
        label="User ID"
        value={userId}
        onChangeText={setUserId}
        mode="outlined"
        style={styles.input}
        />
      <HelperText type="error" visible={hasErrors()}>
        User ID is invalid!
      </HelperText>
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <AppDialog
        visible={dialogVisible}
        onDismiss={hideDialog}
        title="Login Failed"
        message="Invalid User ID or Password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default Login;
