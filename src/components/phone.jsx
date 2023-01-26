import React from 'react';
import {faker} from '@faker-js/faker';

    
const Phone = (props) => {
    const {phone} = props.data;
    return (
        <li>
        <a href="{'tel:${phone}}">Téléphoner</a>
        </li>

    );
};



export default Phone;