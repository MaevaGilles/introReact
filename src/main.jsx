import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/customers';



const App = () => (
    <>
    <h1>Hello mon cul ! </h1>
    <Customers />
    
    </>
);

ReactDOM.render(<App />, document.getElementById('root'));