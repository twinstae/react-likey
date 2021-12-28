import React, { useEffect, useState } from "react";

import { useAtom } from "jotai";
import productListAtom from "./state/productListState";
import createLocalStorageRepository from "./repository/localStorageRepository";
import toast, { Toaster } from "react-hot-toast";

export default function useProductListBackUp() {
  const [productList, setProductList] = useAtom(productListAtom);

  const { loadAllProduct, saveAllProduct } = createLocalStorageRepository();

  useEffect(() => {
    const savedProductList = loadAllProduct();

    if (savedProductList !== null) {
      setProductList((_) => savedProductList);
    }
  }, []);

  useEffect(() => {
    saveAllProduct(productList);
  }, [productList]);

  return { productList };
}
