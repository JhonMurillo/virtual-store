import React from 'react'
import { InputGroupAddon } from 'reactstrap';
import { InputGroup, Input, Button } from "./styles";
import { BsSearch } from 'react-icons/bs'

export const SearchInput = () => (
    <InputGroup>
        <Input placeholder='Busca tu producto Aqui!' />
        <InputGroupAddon addonType="append">
            <Button color="secondary" title='Buscar'>
                <BsSearch />
            </Button>
        </InputGroupAddon>
    </InputGroup>
)
