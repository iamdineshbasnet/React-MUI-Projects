import React from 'react';
import Heading from './Heading';

const Main = ({children}) => {
    return (
        <>
            <Heading/>
            {children}
        </>
    );
};

export default Main;