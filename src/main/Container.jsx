import React from 'react';
import Header from '../components/Header';
// import Nav from '../components/Nav';
import Tax from '../components/Tax';
import How from '../components/How';
import Calculator from '../calculator/Calculator';

import './Container.css'

const Container = () => {
    return (
      <>
        <main className="container">
          <Header />            
          <Tax />  
          <How />   
          <Calculator />    
        </main>
      </>
    );
}
 
export default Container;