import styled from 'styled-components';
import { Card, CardTitle as CT, CardText as CText } from 'reactstrap';

export const CardDiv = styled(Card)`
  border-radius: 0;
  margin-bottom: 10px;
  margin-top: 10px;
  ${({ is_feature }) =>
    is_feature &&
    `
  border: 3px solid #02d04e;
  background-color: #f2fcf6;
  `}
`;

export const CardTitle = styled(CT)`
  font-size: 40px;
  color: #253556;
`;

export const CardText = styled(CText)`
  text-align: justify;
`;
