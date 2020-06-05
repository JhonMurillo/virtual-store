import React from 'react';
import { InputGroupAddon } from 'reactstrap';
import { InputGroup, Input, Button } from './styles';
import { BsSearch } from 'react-icons/bs';

export const SearchInput = ({ onClick, onChange }) => (
  <InputGroup>
    <Input placeholder="Buscanos aqui!" onChange={onChange}/>
    <InputGroupAddon addonType="append">
      <Button color="secondary" title="Buscar" onClick={onClick}>
        <BsSearch />
      </Button>
    </InputGroupAddon>
  </InputGroup>
);
