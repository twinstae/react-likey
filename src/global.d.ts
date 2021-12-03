type ProductT = {
    id: string,
    imageLink: string,
    productLink: string,
    productName: string,
    priceWon: number,
    category: string,
}


interface ProductRepository {
  loadAllProduct: () => ProductT[] | null;
  saveAllProduct: (productList: ProductT[]) => void;
}