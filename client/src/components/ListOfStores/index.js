import React from 'react';
import { CardStore } from '../CardStories';
import { CardDeck, Paginate } from './styles';
import { Row, Col } from 'reactstrap';

export const ListOfStores = ({ stores = [], metadata = {}, limit, onChangePagination, activePage }) => {
  if (stores.length === 0) {
    return <h1>No hay Tiendas :(</h1>;
  } else {
    return (
      <Row>
        <CardDeck>
          {stores.map((store, index) => (
            <Col sm={12} key={index}>
              <CardStore {...store} key={index} />
            </Col>
          ))}
        </CardDeck>
        <Paginate
          itemsCountPerPage={limit}
          totalItemsCount={metadata.size}
          pageRangeDisplayed={5}
          activePage={activePage}
          itemClass="page-item"
          linkClass="page-link"
          onChange={onChangePagination}
        />
      </Row>
    );
  }
};
