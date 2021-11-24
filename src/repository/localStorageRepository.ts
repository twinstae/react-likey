import { PRODUCT_LIST_KEY } from '../constants';


export default function createLocalStorageRepository(): ProductRepository {

  // void => Product[] | null
  function loadAllProduct(): ProductT[] | null{
    const save = localStorage.getItem(PRODUCT_LIST_KEY);
    
    if(save){
      return JSON.parse(save);
    }
     
    return null;
  }

  // ProductT[] => void
  function saveAllProduct(productList: ProductT[]): void{
    localStorage.setItem(PRODUCT_LIST_KEY, JSON.stringify(productList));
  }
  
  return { loadAllProduct, saveAllProduct }
}