import ProductDetails from "@/components/products/ProductDetails";
import { IProduct, PageProps } from "@/types";
import axios from "axios";


// Fetch product data
const getProduct = async (id: string): Promise<IProduct> => {
    try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw new Error("Failed to fetch product");
    }
};



const page = async ({ params }: PageProps) => {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.id);

    return (<div className=" bg-gray-50 dark:bg-slate-900 flex items-center md:py-0 my-16 justify-center">
        <ProductDetails product={product} />
        </div>)  
};

export default page;