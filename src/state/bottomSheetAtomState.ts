import { atom, PrimitiveAtom, useAtom } from 'jotai';

const bottomSheetAtom = atom(false);

export function useBottomSheetAtom(isOpenAtom: PrimitiveAtom<boolean>){
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  return {
    isOpen,
    open: ()=>setIsOpen(true),
    dismiss: ()=>setIsOpen(false),
  }
}

export default bottomSheetAtom;