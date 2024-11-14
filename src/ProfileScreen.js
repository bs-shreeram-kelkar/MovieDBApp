// ProfileScreen.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button, TextInput } from 'react-native-paper';
import { setUsername, setEmail, setName } from './redux/userSlice';
import { View } from 'react-native';

const ProfileScreen = () => {
  const { username, email, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Username: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Name: {name}</Text>

      <TextInput
        placeholder="Update Username"
        onChangeText={(text) => dispatch(setUsername(text))}
      />
      <TextInput
        placeholder="Update Email"
        onChangeText={(text) => dispatch(setEmail(text))}
      />
      <TextInput
        placeholder="Update Name"
        onChangeText={(text) => dispatch(setName(text))}
      />
    </View>
  );
};

export default ProfileScreen;
