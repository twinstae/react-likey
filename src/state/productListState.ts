import {atom, useAtom} from "jotai";

const productListAtom = atom<ProductT[]>([]);

export default function useProductListAtom(){
  const [productList, setProductList] = useAtom(productListAtom);

  function addProduct(product: ProductT){
    setProductList(old => [...old, product])
  }

  return {
    productList,
    addProduct,
  }
}
