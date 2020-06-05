import React from 'react'
import { SearchInput } from '../SearchBar'
// import { AllProducts } from '../../containers/GetProducts'
import { AllStores } from '../../containers/GetStores'
import { ListOfStores } from '../../containers/ListOfStores'


export const Home = ({ offset, filter }) => (
    <>
        <SearchInput />
        {/* <hr />
        <AllProducts /> */}
        <hr />
        {/* <AllStores offset={offset} filter={filter} /> */}
        <ListOfStores />

    </>
)
