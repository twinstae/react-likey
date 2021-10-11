import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Home from './home';
import { renderWithRouter } from '../testUtil';

describe('메인화면 <Home />', () => {
  xit('matches snapshot', () => {
    const utils = renderWithRouter(Home);
    expect(utils.container).toMatchSnapshot();
  });

  it('시작하면, 리스트는 비어 있고 사용방법이 보인다', () => {
    const utils = renderWithRouter(Home);
    const usage = utils.getByText('라이키 사용방법');
    expect(usage).not.toBeNull();
  });

  /*
  const utils = render(<Home />);
    
    // 버튼을 가져온다 <- 페이지에 버튼이 있어야 한다
    const button = utils.getByText('저장하기');

    // 버튼을 클릭한다
    fireEvent.click(button);

    // 상품 리스트가 보인다.
    const 상품_리스트 = await screen.findByText('상품 리스트');
    expect(상품_리스트).not.toBeNull();
    
    // 사용방법은 보이지 않는다
    const usage = utils.queryByText('라이키 사용방법');
    expect(usage).toBeNull();
  */
});