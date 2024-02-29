import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

interface LoginPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPromptModal: React.FC<LoginPromptModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Log in to add to favorites.</Text>
        </ModalBody>
        <Button colorScheme="blue" onClick={onClose}>
          Close
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default LoginPromptModal;
