import React, { useEffect, useState } from "react";

import { useAtom } from "jotai";
import toast, { Toaster } from "react-hot-toast";
import { useBottomSheetAtom } from "./state/bottomSheetAtom";

export default function useClipBoardToast() {
  const [clipBoardText, setClipBoardText] = useState("");

  useEffect(() => {
    if (clipBoardText !== "") {
      toast(clipBoardText);
    }
  }, [clipBoardText]);

  useEffect(() => {
    const interval = setInterval(() => navigator.clipboard.readText().then(setClipBoardText), 3 * 1000);
    // 3초마다 확인

    return () => clearInterval(interval);
  }, []);

  const { open } = useBottomSheetAtom();

  return {
    clipBoardText,
    open: (url: string) => {
      setClipBoardText(url);
      open(url);
    }
  };
}
