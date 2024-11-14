import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button, TextInput } from 'react-native-paper';
import { setUsername, setEmail, setName } from './redux/userSlice';
import { View } from 'react-native';



const UserDetailsTab = () => {
    const { username, email, name } = useSelector((state) => state.user);
  
    return (
      <View>
        <Text>Username: {username}</Text>
        <Text>Email: {email}</Text>
        <Text>Name: {name}</Text>
  
      </View>
    );
  };
  
  export default UserDetailsTab;
  