import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-libary/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav componet', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });
    
    //snapshot test
})