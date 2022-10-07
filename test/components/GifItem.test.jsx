import React from 'react';
import { GifItem } from "../../src/components/GifItem";
import {render} from '@testing-library/react';

describe('Prueba en GifItem', () => {
    const title = 'One punch man';
    const url = 'https://one-punch-man/saitama.jpg';

    test('Debe hacer match con el snapshot', () => {
        const container = render(<GifItem title={title} url= {url} />);
        expect(container).toMatchSnapshot();    
    });
 });