import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import AddProductPage from "../pages/AddProductPage";

export default function AddProductSheet({open, onDismiss}: {open: boolean, onDismiss: ()=>void}){    
    return (
    <BottomSheet
      id="add-product-sheet"
          open={open}
          onDismiss={onDismiss}
          snapPoints={({ minHeight }) => minHeight}
        >
          <AddProductPage />
        
          <button onClick={onDismiss} className="w-full">
            취소
          </button>
      </BottomSheet>
      );
}