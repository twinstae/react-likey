import { atom, useAtom } from "jotai";

const categoryListAtom = atom(["전체", "살것", "선물"]);
const nowCategoryAtom = atom("전체");

export function useCategoryAtom() {
  const [categoryList, setCategoryList] = useAtom(categoryListAtom);

  const [nowCategory, setNowCategory] = useAtom(nowCategoryAtom);

  function selectCategory(newCategory: string) {
    if (categoryList.includes(newCategory)) {
      setNowCategory(newCategory);
    }
  }

  return {
    categoryList,
    nowCategory,
    selectCategory,
  };
}
