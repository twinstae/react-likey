// Try<ProductT>
// ProductT | Error

function useFakeAPI() {
  
  function getProductFromOGUrl(url: string): ProductT | Error {
    const testProduct = {
        id: 1,
        imageLink: "test",
        productLink: "test",
        productName: "test",
        priceWon: 2000,
        category: "all",
    }

    return testProduct;
  }

  return { getProductFromOGUrl }
}

function useRealAPI(){
  
}

export default useFakeAPI;