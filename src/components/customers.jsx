import React from 'react';
import {faker} from '@faker-js/faker';
import Customer from './customer';



const Customers = () => {
const customersList = Array.from({length: 100}, () => ({
    id: faker.datatype.uuid(),
    id2: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
}));

return (
    <ul>
        {customersList.map((customerData) => (
            <Customer data={customerData} key={customerData.id}/>
            
        ))}
        

    </ul>
    );
};

export default Customers;