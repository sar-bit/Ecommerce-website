import apisauce from "apisauce";


const baseUrl = "https://fakestoreapi.com";

const create = (baseURL = baseUrl) => {
  const apis = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
    },
    timeout: 100000,
  });

  const signIn = (data) => {
    console.log(data);
    return apis.post("/auth/signin", data);
  };

  const getProduct = (data) =>{
      return apis.get("/products",{})
  }

  const getCategory = (data) =>{
    return apis.get("/products/categories",{})
}

const getCart =(data) =>{
  return apis.get('/carts/5',{})
}

const getSingleProduct =(data) =>{
  return apis.get(`/products/${data.productId}`,{})
}


  return {
    signIn,
    getProduct,
    getCategory,
    getCart,
    getSingleProduct,
  };
};
export default {
  create,
};
