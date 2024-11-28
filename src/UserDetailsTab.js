import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button, TextInput, Card, RadioButton} from 'react-native-paper';
import { setUsername, setEmail, setName } from './redux/userSlice';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { setTheme } from './redux/themeSlice';
import { Navigation } from 'react-native-navigation';
import { mmkvStorage } from '..';

const UserDetailsTab = () => {
  const { username, email, name } = useSelector((state) => state.user);
  const [value, setValue] = React.useState('dark');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ythgfjdke")
  }, []);


  const handleThemeChange = (newTheme) => {
    // console.log(newTheme)
    dispatch(setTheme(newTheme)); // Dispatch the theme change
    setValue(newTheme)
  };
  const uname = mmkvStorage.getString("username")

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="User Details" />
        <Card.Content>
        <Text variant="titleMedium" style={styles.label}>
            Username: {uname}
          </Text>
          <Text variant="titleMedium" style={styles.label}>
            Name:
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
            Address:
          </Text>
          <Text variant="bodyMedium" style={styles.value}>
            {name || 'N/A'}
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" style={styles.button} onPress={() => {
              mmkvStorage.set('isLoggedIn', false);
              Navigation.setRoot({
                root: {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'com.myApp.LoginScreen',
                                    options: {
                                      topBar: {
                                          visible: false, // Hide the top bar
                                          drawBehind: false, // Draw the screen behind the top bar
                                          animate: false, // Disable animation for hiding
                                      },
                                  },  
                                },
                            },
                        ],
                    },
                },
            });
        }}>
            Logout
          </Button>
        </Card.Actions>
      </Card>
      <Text> Theme: </Text>
      <RadioButton.Group onValueChange={handleThemeChange} value={value}>
        <View>
          <Text>green</Text>
          <RadioButton value="dark" />
        </View>
        <View>
          <Text>blue</Text>
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
