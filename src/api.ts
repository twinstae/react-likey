// Try<ProductT>
// ProductT | Error

const HOST = 'http://localhost:8000';

export function getProductFromOGUrl(productLink: string): Promise<ProductT>{
  return fetch(HOST + "/og?url="+productLink)
    .then(res => res.json())
    .catch(err => err)
}