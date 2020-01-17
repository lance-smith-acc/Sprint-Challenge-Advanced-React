import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import App from './App';


test('Checks that data from api is being mapped over correctly', async() => {
     const app = render(<App />);
     const elem1 = await waitForElement(() => app.getByTestId('player-name1'))
     const elem2 = await waitForElement(() => app.getByTestId('country-name3'))

    expect(elem1.textContent).toBe('Megan Rapinoe');
    expect(elem2.textContent).toBe('United States');
 
})