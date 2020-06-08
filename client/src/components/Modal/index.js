import React from 'react';
import { Button, Modal as MD, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Modal = ({ isOpen = true, onToggle }) => {
  return (
    <>
      <MD isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>Apóyanos!</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onToggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </MD>
    </>
  );
};
