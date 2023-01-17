import React from 'react';
import './Main.css'
import Header from './Header'
import Navigation from './Navigation'
const Main = ({children}) => {
    return (
        <>
        <Header/>
        <Navigation/>
          {children}  
        </>
    );
};

export default Main;