import React from 'react';

    
const Email = (props) => {
    const {firstName, lastName,} = props.data;
    return (
        <li>
        <a href={`mailto:${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`}>Envoyer un message</a>
        </li>

    );
};



export default Email;