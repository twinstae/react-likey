import useProductListAtom from "./productListState";
import { renderHook, act } from '@testing-library/react-hooks'

const testProduct = {
  imageLink: "test",
  productLink: "test",
  productName: "test",
  priceWon: 2000,
  category: "all",
}

describe('productListState', () => {
  it('addProduct하면 상품이 추가된다.', ()=>{
    const { result } = renderHook(() => useProductListAtom());

    expect(result.current.productList).toEqual([]);

    act(() => result.current.addProduct(testProduct));

    expect(result.current.productList).toEqual([testProduct]);
  })
})

