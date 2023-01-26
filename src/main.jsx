import React from 'react';
import ReactDOM from 'react-dom/client';
import Customers from './components/customers';



const App = () => (
    <>
    <h1>Hello mon cul ! </h1>
    <Customers />
    
    </>
);

ReactDOM.createRoot(document.querySelector('#root')).render(<App/>);