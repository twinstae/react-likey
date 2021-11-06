import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import AddProductPage from "../pages/AddProductPage";
import bottomSheetAtom, { useBottomSheetAtom } from "../state/bottomSheetAtomState";

export default function AddProductSheet(){    
    const {isOpen, dismiss} = useBottomSheetAtom(bottomSheetAtom);

    return (
    <BottomSheet
      id="add-product-sheet"
          open={isOpen}
          onDismiss={dismiss}
          snapPoints={({ minHeight }) => minHeight}
        >
          <AddProductPage />
        
          <button id="cancel-add-product-button" onClick={dismiss} className="w-full">
            취소
          </button>
      </BottomSheet>
      );
}