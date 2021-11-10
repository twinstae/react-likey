import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import AddProductForm from "./AddProductForm";
import { useBottomSheetAtom } from "../state/bottomSheetAtomState";

export default function AddProductSheet(){    
  const {isOpen, dismiss} = useBottomSheetAtom();

  return (
    <BottomSheet
      id="add-product-sheet"
      open={isOpen}
      onDismiss={dismiss}
      snapPoints={({ minHeight }) => minHeight}
    >
      <AddProductForm dismiss={dismiss}/>
    
      <button id="cancel-add-product-button" onClick={dismiss} className="w-full">
        취소
      </button>
    </BottomSheet>
  );
}