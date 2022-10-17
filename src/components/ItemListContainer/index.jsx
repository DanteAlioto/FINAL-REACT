import React, {useState, useEffect} from 'react';

import {getFirestore, collection, getDocs, query,where} from 'firebase/firestore'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));

            getDocs(queryFilter)
            .then(res => setData( res.docs.map( product => ({id: product.id, ...product.data()}) )))
            
        } else {
            getDocs(queryCollection)
            .then(res => setData( res.docs.map( product => ({id: product.id, ...product.data()}) )))
            
        }

    }, [categoriaId])

    return (
        <>
            
            <div className='counter d-flex img-fluid justify-content-center mx-3 p-3'>
                <ItemList data={data}/> 
            </div>
            
        </>
    )
}

export default ItemListContainer;