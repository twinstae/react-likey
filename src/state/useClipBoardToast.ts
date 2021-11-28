import { useEffect, useState } from "react";
import { useBottomSheetAtom } from "../state/bottomSheetAtomState";
import toast from "react-hot-toast";

function useClipBoardToast(){
    const [clipBoardText, setClipBoardText] = useState("")
  
    useEffect(() => { 
      if (clipBoardText !== ""){
        toast(clipBoardText);
      }
    }, [clipBoardText])
  
    useEffect(() =>{
      const interval = setInterval(()=> navigator.clipboard.readText().then(setClipBoardText), 3 * 1000)
      // 3초마다 확인
  
      return () => clearInterval(interval);
    }, [])
  
    const {open} = useBottomSheetAtom();
  
    return { clipBoardText, open: (url: string) => {
      setClipBoardText(url);
      open(url);
    } };
  }
export default useClipBoardToast;