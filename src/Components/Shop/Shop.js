import React, { useEffect, useState } from 'react';
import IndividualItems from '../Individual Items/IndividualItems';
import './Shop.css';
import fakeData from '../Fake Data/fakeData.JSON';
import Packages from '../Packages/Packages';
import HelmetTitle from '../HelmetTitle/HelmetTitle';

const Shop = () => {
    const [dataa, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => { // used to get search result
        fetch(fakeData)
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText])

    const textChange = (event) => { // getting search result
        console.log(event.target.value);
        setSearchText(event.target.value);
    }
    return (
        <div>
            <Packages></Packages>
            <h1 className='text-center shop-header container'>To The Wild Life</h1>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search pictures..' />
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    dataa.map(items => <IndividualItems key={items.id} items={items}></IndividualItems>)
                }
            </div>
        </div>
    );
};

export default Shop;