/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/types";
import axios from "axios";

// fetch products
export const getProducts = async (limit: number, skip: number) => {
    try {
        const res = await axios.get<{ products: IProduct[]; total: number }>(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        return res.data; // returns { products, total }
    } catch (error) {
        throw error; // let the caller handle the error
    }
};

// create product api
export const createProduct = async (data: unknown) => {
    return axios.post("https://dummyjson.com/products/add", data, {
        headers: { "Content-Type": "application/json" },
    });
};

// update product api
export const updateProductApi = async (productId: number, payload: any) => {
    const res = await axios.patch(
        `https://dummyjson.com/products/${productId}`,
        payload,
        {
            headers: { "Content-Type": "application/json" },
        }
    );
    return res.data;
};


export const deleteProduct = async (productId: number) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error; // Let the component handle the error
  }
};
