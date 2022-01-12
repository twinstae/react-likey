import React from "react";
import Usage from "../components/Usage";
import ProductList from "../components/ProductList";
import AddProductSheet from "../components/AddProductSheet";
import useProductListBackUp from "../state/useProductListBackUp";
import BottomNavBar from "../components/BottomNavBar";
import { ScreenHelmet } from "@karrotframe/navigator";

export default function Home() {
  const { productList } = useProductListBackUp();

  return (
    <>
      <ScreenHelmet title="Likey" />
      <div className="flex flex-col h-full justify-start items-center bg-indigo-100">
        <div className="max-w-md h-full shadow-lg bg-white relative p-4">
          <div data-testid="home">
            {productList.length === 0 ? <Usage /> : <ProductList productList={productList} />}

            <AddProductSheet />
          </div>
        </div>
      </div>

      <BottomNavBar />
    </>
  );
}
