import React from 'react';
import { render } from '@testing-library/react';
import Usage from './Usage';

describe('<Home />', () => {
  it('matches snapshot', () => {
    const utils = render(<Usage />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Usage />);
    utils.getByText('라이키 사용방법');
  });
});