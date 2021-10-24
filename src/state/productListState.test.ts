import { useProductListAtom, createProductListAtom, mutation } from "./productListState";
import { renderHook, act } from '@testing-library/react-hooks'

const testProduct = {
  id: 1,
  imageLink: "test",
  productLink: "test",
  productName: "test",
  priceWon: 2000,
  category: "all",
}

describe('productListState', () => {
  it('addProduct하면 productList에 상품이 추가된다.', ()=>{
    const productListAtom = createProductListAtom([]);

    const { result } = renderHook(() => useProductListAtom(productListAtom));

    act(() => result.current.addProduct(testProduct));

    expect(result.current.productList).toEqual([testProduct]);
  })

  it('deleteProduct하면 productList에서 해당 상품이 삭제된다.', ()=>{
    const productListAtom = createProductListAtom([testProduct]);

    const { result } = renderHook(() => useProductListAtom(productListAtom));

    act(() => result.current.deleteProduct(testProduct.id));

    expect(result.current.productList).toEqual([]);
  })

  it('함수형 식으로 deleteProductList', ()=>{
    const result = mutation.deleteProduct(1)([testProduct]);
    expect(result).toEqual([]);
  })
})

