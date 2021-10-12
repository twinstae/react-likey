const HOST = 'http://localhost:3000/';

describe('상품 추가', () => {
  beforeEach(() => {
    cy.visit(HOST)
  })

  // 저장하기라니 버튼 이름이 좀 이상한데?
  it('저장하기 버튼을 누르면, 상품 추가 페이지로 이동한다.', () => {
    cy.url().should('eq', HOST);

    cy.contains('저장하기').click();

    cy.url().should('eq', HOST + 'add');
  })

  it('필수 값을 모두 입력하고 상품 추가를 누르면, 상품이 추가되고 home 으로 이동한다.', ()=>{
    cy.contains('저장하기').click();

    cy.get('#image-link-input').invoke('val', 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/597195908017512-e5a3f864-9d3d-45a9-99df-6b3f57410b7f.jpg')
    cy.get('#product-link-input').invoke('val', 'https://www.coupang.com/vp/products/5585425593?itemId=3423820284&vendorItemId=71503222724');
    // 뭔가 이건 아닌 것 같은데. 왜 이렇게 노가다가 되는 걸까 form이라는 것은...
    cy.get('#product-name-input').type('제주 삼다수');
    cy.get('#price-won-input').type('{backspace}{backspace}23520');

    cy.get('#add-product-button').click();

    cy.url().should('eq', HOST);

    cy.get('#product-list').contains('제주 삼다수');
    cy.get('#product-list').contains('23520');
  })
})

