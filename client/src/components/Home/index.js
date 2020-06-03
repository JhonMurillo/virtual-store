import React from 'react'
import { SearchInput } from '../SearchBar'
import { AllProducts } from '../../containers/GetProducts'


export const Home = () => (
    <>
        <SearchInput />
        <hr />
        <AllProducts />
    </>
)
