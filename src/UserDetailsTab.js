import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button, TextInput, Card, RadioButton} from 'react-native-paper';
import { setUsername, setEmail, setName } from './redux/userSlice';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { setTheme } from './redux/themeSlice';

const UserDetailsTab = () => {
  const { username, email, name } = useSelector((state) => state.user);
  const [value, setValue] = React.useState('dark');
  const dispatch = useDispatch();

  const handleThemeChange = (newTheme) => {
    // console.log(newTheme)
    dispatch(setTheme(newTheme)); // Dispatch the theme change
    setValue(newTheme)
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="User Details" />
        <Card.Content>
          <Text variant="titleMedium" style={styles.label}>
            Username:
          </Text>
          <Text variant="bodyMedium" style={styles.value}>
            {username || 'N/A'}
          </Text>

          <Text variant="titleMedium" style={styles.label}>
            Email:
          </Text>
          <Text variant="bodyMedium" style={styles.value}>
            {email || 'N/A'}
          </Text>

          <Text variant="titleMedium" style={styles.label}>
            Name:
          </Text>
          <Text variant="bodyMedium" style={styles.value}>
            {name || 'N/A'}
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" style={styles.button} onPress={() => console.log('Edit Details')}>
            Edit Details
          </Button>
        </Card.Actions>
      </Card>
      <Text> Theme: </Text>
      <RadioButton.Group onValueChange={handleThemeChange} value={value}>
        <View>
          <Text>Dark</Text>
          <RadioButton value="dark" />
        </View>
        <View>
          <Text>Light</Text>
          <RadioButton value="light" />
        </View>
      </RadioButton.Group>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  card: {
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    marginTop: 8,
  },
  value: {
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default UserDetailsTab;
