import {atom, PrimitiveAtom, useAtom} from "jotai";

export const mutation = { 
  deleteProduct: (productId: string) => (old: ProductT[]) => old.filter(product => product.id !== productId)
}

export function useProductListAtom(productListAtom: PrimitiveAtom<ProductT[]>){
  const [productList, setProductList] = useAtom(productListAtom);

  function addProduct(product: ProductT){
    setProductList((old: ProductT[]) => [...old, product])
  }

  function deleteProduct(productId: string){
    setProductList(mutation.deleteProduct(productId))
  }

  return {
    productList,
    addProduct,
    deleteProduct,
    setProductList
  }
}

export default atom<ProductT[]>([]);