import { useProductListAtom, mutation } from "./productListState";
import { renderHook, act } from '@testing-library/react-hooks'
import { atom } from "jotai";

const testProduct = {
  id: 'f4e1f41f-4377-44ed-98da-bcfebd1c964d',
  imageLink: "test",
  productLink: "test",
  productName: "test",
  priceWon: 2000,
  category: "all",
}

describe('productListState', () => {
  function createAndRenderHook(initValue: ProductT[]){
    const productListAtom = atom(initValue);
    const { result } = renderHook(() => useProductListAtom(productListAtom));

    return result;
  }
  it('addProduct하면 productList에 상품이 추가된다.', ()=>{
    const result = createAndRenderHook([] as ProductT[]);

    act(() => result.current.addProduct(testProduct));

    expect(result.current.productList).toEqual([testProduct]);
  })

  it('deleteProduct하면 productList에서 해당 상품이 삭제된다.', ()=>{
    const result = createAndRenderHook([] as ProductT[]);

    act(() => result.current.deleteProduct(testProduct.id));
    
    expect(result.current.productList).toEqual([]);
  })

  it('함수형 식으로 deleteProductList', ()=>{
    const result = mutation.deleteProduct(testProduct.id)([testProduct]);
    expect(result).toEqual([]);
  })
})

