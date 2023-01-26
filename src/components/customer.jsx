import React from 'react';
import Email from './email';


const Customer = (props) => {
    const {firstName, lastName, id} = props.data;

    return (
        <ul><li>
        Prénom : {firstName} 
        </li>
        <li>
        Nom: {lastName} 
        </li>
        <li>
        <Email data={props.data} key={id}/>
        </li>
        </ul>
        
    );
};

export default Customer;