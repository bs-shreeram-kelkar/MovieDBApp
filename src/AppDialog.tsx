import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, Portal, Text,Button } from 'react-native-paper';

interface AppDialogProps {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  message: string;
}

const AppDialog: React.FC<AppDialogProps> = ({ visible, onDismiss, title, message }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{message}</Text>
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={onDismiss}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default AppDialog;
