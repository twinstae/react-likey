// Try<ProductT>
// ProductT | Error

const HOST = 'http://localhost:8000';

interface OGResBody {
  title: string,
  image: string,
}

export function getProductFromOGUrl(productLink: string): Promise<OGResBody>{
  return fetch(HOST + "/og?url="+productLink)
    .then(res => res.json())
    .catch(err => err)
}