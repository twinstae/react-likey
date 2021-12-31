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
    const intervalId = setInterval(
      () =>
        navigator.clipboard.readText().then((newText) => {
          if (clipBoardText !== newText) setClipBoardText(newText);
        }),
      3 * 1000
    );
    // 3초마다 확인

    return () => clearInterval(intervalId);
  }, []);

  const { open } = useBottomSheetAtom();

  return {
    clipBoardText,
    open: (url: string) => {
      setClipBoardText(url);
      open(url);
    },
  };
}
