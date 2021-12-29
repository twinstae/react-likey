import { atom, useAtom } from "jotai";

export const isOpenAtom = atom(false);
export const productLinkAtom = atom(null as string | null);

export function useBottomSheetAtom() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [productLink, setProductLink] = useAtom(productLinkAtom);
  return {
    isOpen,
    productLink,
    open: (newLink: string) => {
      setProductLink(newLink);
      setIsOpen(true);
    },
    dismiss: () => setIsOpen(false),
  };
}
