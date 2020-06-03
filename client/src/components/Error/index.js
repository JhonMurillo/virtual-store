import React from 'react'
import { Container } from 'reactstrap';
import { AlertMsg } from './styles';


export const Error = ({ showError, message }) => {
  return (
    <>
    { showError && 
      <AlertMsg color='danger'>
        <Container>
          {message}
        </Container>
      </AlertMsg>
    }
  </>
  )
}
