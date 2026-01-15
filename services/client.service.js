const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCollections = async () => {
  const res = await fetch(BASE_URL+"client/collections");
  if (!res.ok) throw new Error("Failed to fetch collections");
  return res.json();
};

export const getBrands = async () => {
  const res = await fetch(`${BASE_URL}client/brands`);

  if (!res.ok) {
    throw new Error("Failed to fetch brands");
  }

  return res.json();
};
export const getCategories = async()=>{
  const res = await fetch(`${BASE_URL}client/categories`)
      if(!res.ok){
        throw new Error("Failed to fetch Categories")
      }
      return res.json();
}
export const getProducts = async()=>{
 const res = await fetch(`${BASE_URL}client/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch Products");
  }

  return res.json();
}

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};