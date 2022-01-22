import React from 'react';
import Header from './Header';
// import Nav from './Nav';
import Tax from './Tax';
import How from './How';
import Calculator from './Calculator';

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