import React from 'react';
import Email from './email';
import Phone from './phone';


const Customer = (props) => {
    const {firstName, lastName, id, id2} = props.data;

    return (
        <li>
        Prénom : {firstName} 
        Nom: {lastName} 
        <Email data={props.data} key={id}/>
        <Phone data={props.data} key={id2}/>
        </li>

        
    );
};

export default Customer;