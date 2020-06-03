import styled from 'styled-components'
import { Card } from 'reactstrap';
import NumberFormat from 'react-number-format';

export const CardDiv = styled(Card)`
  margin-bottom: 10px;
  border-radius: 0;
`

export const FormatNumber = styled(NumberFormat)`
  font-size: ${props => props.fontSize};
  text-decoration: ${props => props.has_decoration ? 'line-through' : ''};
  color: ${props => props.color}
`