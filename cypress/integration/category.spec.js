const HOST = "http://localhost:3000/";

describe("상품 추가", () => {
  function expectProductExist(product) {
    cy.get("#product-list").contains(product.productName);
    cy.get("#product-list").contains(product.priceWon);
    cy.get("#product-list").contains(product.category);
  }

  function addProduct(product){
    cy.get("#add-product-link").focus();
    
    cy.window().its('navigator.clipboard')
    .invoke('writeText', "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=125174961")

    cy.get("#add-product-link").click();
    cy.get("#add-product-sheet");
    cy.get("#image-link-input").should("be.visible");
    // 뭔가 이건 아닌 것 같은데. 왜 이렇게 노가다가 되는 걸까 form이라는 것은...
    cy.get("#price-won-input").type(
      `{backspace}{backspace}${product.priceWon}`
    );
    cy.get("#category-input").select(product.category);

    cy.get("#add-product-button").click();

    cy.get("#add-product-sheet").should("not.exist");
  }

  it("setup", () => {
    cy.visit(HOST);

    addProduct({priceWon: 16800, category: "전체"})
    addProduct({priceWon: 16800, category: "살것"})
    addProduct({priceWon: 16800, category: "선물"})
  });

  it("카테고리 버튼을 클릭하면, 목록이 보인다", ()=>{

  })

  it("카테고리 목록에서 살것을 선택하면 살것만 보인다", ()=>{
    
  })
});
