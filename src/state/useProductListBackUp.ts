import React, { useEffect } from "react";
import productListAtom from '../state/productListState';
import { useAtom } from 'jotai';
import createLocalStorageRepository from "../repository/localStorageRepository";

function useProductListBackUp(){
    const [productList, setProductList] = useAtom(productListAtom);

    const {loadAllProduct, saveAllProduct} = createLocalStorageRepository();

    useEffect(()=>{
        const savedProductList = loadAllProduct();

        if(savedProductList !== null){
        setProductList(_ => savedProductList);
        }
    }, [])

    useEffect(() => { saveAllProduct(productList) }, [productList])

    return { productList };
}
  

export default useProductListBackUp;