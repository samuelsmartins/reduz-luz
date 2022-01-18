import React from 'react';
import Header from './Header';
// import Nav from './Nav';
import Content from './Content';

import './Container.css'

const Container = () => {
    return (
      <>
        <main className="container">
          <Header />
          <Content />         
        </main>
      </>
    );
}
 
export default Container;