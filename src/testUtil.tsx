import React from 'react';

import { render } from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

export function renderWithRouter(Component: any){

    const history = createMemoryHistory()
    const result = render(
      <Router history={history}>
        <Component />
      </Router>,
    )

    return result;
}
