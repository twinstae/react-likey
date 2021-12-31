import React, { useEffect } from "react";

import { atom, useAtom } from "jotai";
import toast from "react-hot-toast";
import { useBottomSheetAtom } from "./state/bottomSheetAtom";
import ClipBoardToast from "./components/ClipBoardToast";

const clipBoardTextAtom = atom("");

export default function useClipBoardToast() {
  const [clipBoardText, setClipBoardText] = useAtom(clipBoardTextAtom);
  const { open } = useBottomSheetAtom();

  useEffect(() => {
    if (clipBoardText !== "") {
      toast.custom((t) => (
        <ClipBoardToast
          visible={t.visible}
          clipBoardText={clipBoardText}
          open={open}
        />
      ));
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

  return {
    clipBoardText,
    open: (url: string) => {
      setClipBoardText(url);
      open(url);
    },
  };
}
