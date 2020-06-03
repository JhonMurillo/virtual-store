import React from 'react'
import { CardProduct } from '../CardProduct'
import { CardDeck } from "./styles";
import { Row, Col } from 'reactstrap'
import { chunk } from 'lodash'

export const ListOfProducts = ({ products = [], cols = 4}) => {
    if (products.length === 0) {
        return <h1>No hay productos :(</h1>
    } else {
        const cardsGroups = chunk(products, cols)
        const colWidth = 12 / cols

        return (
            cardsGroups.map((group, idx)=>
                <Row key={idx}>
                    <CardDeck key={idx}>
                        {
                            group.map((product, index) => <Col sm={12}  key={index} md={colWidth}><CardProduct {...product} key={index} /></Col>)
                        }
                    </CardDeck>
                </Row>
            )
        )
    }
    
}