import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigator } from "@karrotframe/navigator";
import useClipBoardToast from "../useClipBoardToast";

function BottomNavBar() {
  const { open } = useClipBoardToast();
  const navigator = useNavigator();

  return (
    <div className="max-w-md w-full flex absolute bottom-0 justify-around items-center h-14 z-2 bg-white rounded-lg shadow-xl">
      <div className="flex-1 text-center p-4">
        <button
          id="btn-category"
          onClick={() => {
            navigator.push("/");
          }}
        >
          <FontAwesomeIcon icon={faList} /> 카테고리
        </button>
      </div>
      <div className="flex-1 text-center border-r-2 border-l-2 p-4">
        <button
          id="btn-add-product"
          onClick={(e) => {
            open("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> 상품정보입력
        </button>
      </div>
      <div className="flex-1 text-center p-4">
        <button
          id="btn-community"
          onClick={() => {
            navigator.push("/community");
          }}
        >
          <FontAwesomeIcon icon={faUser} /> 커뮤니티
        </button>
      </div>
    </div>
  );
}

export default BottomNavBar;
