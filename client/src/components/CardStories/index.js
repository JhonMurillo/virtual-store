import React, { useState } from 'react';
import { CardBody, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { CardDiv, CardTitle, CardText } from './styles';
import { Link } from '@reach/router';
import { SocialNetwork } from '../SocialNetwork';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs';
import ShowMoreText from 'react-show-more-text';
import renderHTML from 'react-render-html';

const default_description =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
const default_website = 'https://www.workana.com';
export const CardStore = ({
  name,
  description = default_description,
  slug,
  website = default_website,
  social_networks,
  is_feature = true,
  rating,
}) => {
  description = description || default_description;
  const [information, setInformation] = useState(description);
  const onToggleMoreText = (expanded) => {
    if (expanded) {
      setInformation(renderHTML(information));
    } else {
      setInformation(description);
    }
  };
  return (
    <>
      <CardDiv is_feature={is_feature ? 1 : 0}>
        <CardBody>
          <Container>
            <Row>
              <Col xs="12">
                <Link to={`store/${slug}`} title={`store/${slug}`}>
                  <CardTitle>{name}</CardTitle>
                </Link>
                <Rating
                  initialRating={rating}
                  readonly={true}
                  emptySymbol={<BsStar />}
                  fullSymbol={<BsStarFill />}
                />
                <div>
                  <ShowMoreText
                    lines={4}
                    more="Mostrar mas"
                    less="Mostrar menos"
                    onClick={onToggleMoreText}
                    expanded={false}
                  >
                    {information}
                  </ShowMoreText>
                </div>
              </Col>
            </Row>
            <hr />
            <div>
              <SocialNetwork social_networks={social_networks} />
            </div>
            <div>
              <Link to={`store/${slug}`}>
                <Button>Ver mas!</Button>
              </Link>
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Button>Ir a pagina web</Button>
                </a>
              )}
            </div>
          </Container>
        </CardBody>
      </CardDiv>
    </>
  );
};
