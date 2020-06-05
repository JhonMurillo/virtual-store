import React from 'react';
import { MetaHeader } from '../components/MetaHeader';
import { Container } from 'reactstrap';
import { Home as HomeContainer } from '../components/Home';
import { ListOfStores } from '../containers/ListOfStores';

export const Home = () => (
  <Container>
    <MetaHeader
      title="Inicio"
      subtitle="En Band.com.co tu puedes encontrar productos en general!"
    >
      <ListOfStores />
    </MetaHeader>
  </Container>
);
