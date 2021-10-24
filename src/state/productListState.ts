import {atom, PrimitiveAtom, useAtom} from "jotai";

export const mutation = { 
  deleteProduct: (productId: number) => (old: ProductT[]) => old.filter(product => product.id !== productId)
}

export function useProductListAtom(productListAtom: PrimitiveAtom<ProductT[]>){
  const [productList, setProductList] = useAtom(productListAtom);

  function addProduct(product: ProductT){
    setProductList((old: ProductT[]) => [...old, product])
  }

  function deleteProduct(productId: number){
    setProductList(mutation.deleteProduct(productId))
  }

  return {
    productList,
    addProduct,
    deleteProduct,
    setProductList
  }
}


export default atom<ProductT[]>([]);;