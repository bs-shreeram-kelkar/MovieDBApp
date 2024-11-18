import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button, TextInput, Card, Title } from 'react-native-paper';
import { setUsername, setEmail, setName } from './redux/userSlice';
import { View, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const { username, email, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>User Profile</Title>

          <TextInput
            label="Update Username"
            value={username}
            mode="outlined"
            style={styles.input}
            onChangeText={(text) => dispatch(setUsername(text))}
          />

          <TextInput
            label="Update Email"
            value={email}
            mode="outlined"
            style={styles.input}
            onChangeText={(text) => dispatch(setEmail(text))}
          />

          <TextInput
            label="Update Name"
            value={name}
            mode="outlined"
            style={styles.input}
            onChangeText={(text) => dispatch(setName(text))}
          />

          <Button
            mode="contained"
            onPress={() => console.log('Profile Updated')}
            style={styles.button}
          >
            Save Changes
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 12,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});
