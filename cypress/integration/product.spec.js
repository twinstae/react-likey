const HOST = "http://localhost:3000/";

const TEST_PRODUCT = {
  id: 1,
  imageLink:
    "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/597195908017512-e5a3f864-9d3d-45a9-99df-6b3f57410b7f.jpg",
  productLink:
    "https://www.coupang.com/vp/products/5585425593?itemId=3423820284&vendorItemId=71503222724",
  productName: "제주 삼다수",
  priceWon: 23520,
  category: "전체",
};

describe("상품 추가", () => {
  function expectProductExist(product) {
    cy.get("#product-list").contains(product.productName);
    cy.get("#product-list").contains(product.priceWon);
    cy.get("#product-list").contains(product.category);
  }

  it("초기화", ()=>{
    cy.visit(HOST);
    
    cy.get("#add-product-link").focus();
    cy.window().its('navigator.clipboard').invoke('writeText', '')
  })

  it("저장하기 버튼을 누르면, 상품 추가 sheet가 올라온다", () => {

    cy.get("#usage");
    // sheet가 처음에는 보이지 않는다
    cy.get("#add-product-sheet").should("not.exist");

    cy.get("#add-product-link").click();

    cy.get("#add-product-sheet");
  });

  it("취소하기를 누르면 다시 sheet가 내려간다.", () => {
    cy.get("#cancel-add-product-button").click();

    cy.get("#add-product-sheet").should("not.exist");

    // teardown으로 원상 복귀
    cy.get("#add-product-link").click();
  });

  it("요구하는 필드를 입력하지 않으면 상품을 추가할 수 없다", () => {
    /*
    given
    입력 페이지에서
    최소 정보가 입력된 상태이면
    when
    상품 이름이나 가격 단위를 입력하지 않은 채로
    저장하기를 누르면
    then
    알림 팝업이 뜬다...
    이름은 꼭 입력해주셔야 합니다
    가격은 꼭 입력해주셔야 합니다
    */
    cy.get("#add-product-button").click();
    cy.get("#add-product-sheet");
  });

  it("필수 값을 모두 입력하고 상품 추가를 누르면, 상품이 추가되고 sheet가 닫힌다.", () => {
    cy.get("#image-link-input").invoke("val", TEST_PRODUCT.imageLink);
    cy.get("#product-link-input").invoke("val", TEST_PRODUCT.productLink);
    // 뭔가 이건 아닌 것 같은데. 왜 이렇게 노가다가 되는 걸까 form이라는 것은...
    cy.get("#product-name-input").type(TEST_PRODUCT.productName);
    cy.get("#price-won-input").type(
      `{backspace}{backspace}${TEST_PRODUCT.priceWon}`
    );

    cy.get("#add-product-button").click();

    cy.wait(300)
    expectProductExist(TEST_PRODUCT);
  });

  // it('새로고침해도 목록에 있던 상품을 다시 불러온다.', () => {
  //   Cypress.LocalStorage.clear = null;
  //   cy.reload();

  //   cy.get('#product-list').contains('제주 삼다수');
  //   cy.get('#product-list').contains('23520');
  // })

  it("상품의 삭제 버튼을 누르면, 팝업이 뜨고, 취소하면 상품이 그대로 있다", () => {
    cy.get(".delete-product-button").click();

    cy.on("window:confirm", (text) => {
      expect(text).to.contains("삭제하시겠습니까?");
      return false;
    });

    expectProductExist(TEST_PRODUCT);
  });

  it("클립보드에 올바른 링크가 있으면 open graph를 긁어 온다", ()=>{
    cy.get("#add-product-link").focus();

    cy.window().its('navigator.clipboard')
    .invoke('writeText', 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=125174961')

    cy.get("#add-product-link").click();
    cy.get("#add-product-sheet");

    cy.get("#image-link-input").should("be.visible");
    // 뭔가 이건 아닌 것 같은데. 왜 이렇게 노가다가 되는 걸까 form이라는 것은
    cy.get("#price-won-input").type(
      `{backspace}{backspace}${TEST_PRODUCT.priceWon}`
    );
    cy.get("#category-input").select(TEST_PRODUCT.category);

    cy.get("#add-product-button").click();

    cy.get("#add-product-sheet").should("not.exist");
  })
});
