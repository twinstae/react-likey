import React from "react";
import Usage from "../components/Usage";
import ProductList from "../components/ProductList";
import AddProductSheet from "../components/AddProductSheet";
import useClipBoardAtom from "../state/useClipBoardAtom";
import useProductListBackUp from "../state/useProductListBackUp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { productList } = useProductListBackUp();

  const { open } = useClipBoardAtom();

  return (
    <div className="flex flex-col  justify-start items-center bg-indigo-100 ">
      <div className="max-w-md min-h-screen shadow-lg bg-white relative p-4">
        <div data-testid="home">
          {productList.length === 0 ? <Usage /> : <ProductList productList={productList} />}

          <AddProductSheet />
        </div>
        <button
          id="add-product-link"
          className="fixed bottom-0 right-8 flex justify-center py-2 px-4 mb-4 border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
          onClick={(e) => {
            navigator.clipboard.readText().then(open);
          }}
        >
          저장하기
        </button>
        <div className="max-w-md w-full flex fixed bottom-0 justify-around items-center h-14 z-2 bg-white rounded-lg shadow-xl">
          <div className="flex-1 text-center p-4">
            <FontAwesomeIcon icon={faList} /> 카테고리
          </div>
          <div className="flex-1 text-center border-r-2 border-l-2 p-4">
            <button id="btn-add-product">
              <FontAwesomeIcon icon={faPlus} /> 상품정보입력
            </button>
          </div>
          <div className="flex-1 text-center p-4">
            <FontAwesomeIcon icon={faUser} /> 커뮤니티
          </div>
        </div>
      </div>
    </div>
  );
}
