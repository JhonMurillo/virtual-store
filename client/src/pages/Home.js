import React from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { Container } from 'reactstrap'
import { Home as HomeContainer } from '../components/Home'

export const Home = () => (
    <Container>
        <MetaHeader title='Inicio' subtitle='En Band.com.co tu puedes encontrar productos en general!'>
            <HomeContainer />
        </MetaHeader>
    </Container>
)
