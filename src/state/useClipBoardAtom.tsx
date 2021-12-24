import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ClipBoardToast from "../components/ClipBoardToast";
import { useBottomSheetAtom } from "./bottomSheetAtom";

export default function useClipBoardToast() {
  const { open } = useBottomSheetAtom();
  const [clipBoardText, setClipBoardText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      console.count("check");
      navigator.clipboard.readText().then(setClipBoardText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const URL_REGEX =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    if (!clipBoardText.match(URL_REGEX)) {
      return;
    }
    if (clipBoardText) {
      toast.custom((t) => {
        return (
          <ClipBoardToast
            visible={t.visible}
            clipBoardText={clipBoardText}
            open={open}
          />
        );
      });
    }
  }, [clipBoardText]);

  return { clipBoardText, open };
}
