import React from 'react'
import { Container } from 'reactstrap';
import { AlertMsg } from './styles';


export const Error = ({ showError, message }) => {
  console.error(message)
  return (
    <>
    { showError && 
      <AlertMsg color='danger'>
        <Container>
          Lo sentimos a ocurrido un error.
        </Container>
      </AlertMsg>
    }
  </>
  )
}
