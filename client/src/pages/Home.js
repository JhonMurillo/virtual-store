import React from 'react';
import { MetaHeader } from '../components/MetaHeader';
import { Footer } from '../components/Footer';

import { Container } from 'reactstrap';
import { ListOfStores } from '../containers/ListOfStores';

export const Home = () => (
  <Container>
    <MetaHeader
      title="Inicio"
      subtitle="En Band.com.co tu puedes encontrar productos en general!"
    >
      <ListOfStores />
      <Footer />
    </MetaHeader>
  </Container>
);
