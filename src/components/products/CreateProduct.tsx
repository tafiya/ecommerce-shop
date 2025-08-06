"use client";

import React, { FC } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FormValues } from "@/types";
import toast from "react-hot-toast";

const CreateProduct: FC = () => {
    const router = useRouter();

    const defaultValues: FormValues = {
        title: "",
        description: "",
        price: null,
        stock: null,
        brand: "",
        category: "",
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await axios.post(
                "https://dummyjson.com/products/add",
                data,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            toast.success("Product is created");
            reset();
            router.push("/");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data?.message || "Failed to create product.");
            } else if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Failed to create product", {
                    position: "top-center",
                });
            }
        }
    };

    return (
        <div style={{
            border: "1px solid rgba(185, 184, 184, 0.5)",
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
}} className="max-w-xl mx-auto mt-10 p-6  rounded-lg shadow 
 text-gray-900 
00 dark:text-gray-100"
        >
            <h2 className="text-2xl font-bold mb-6">Create Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            className="w-full border rounded px-3 py-1.5 bg-white dark:bg-slate-800 text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                        />
                        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Brand</label>
                        <input
                            type="text"
                            {...register("brand", { required: "Brand is required" })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                        />
                        {errors.brand && <span className="text-red-500 text-sm">{errors.brand.message}</span>}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Category</label>
                        <input
                            type="text"
                            {...register("category", { required: "Category is required" })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                        />
                        {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0, message: "Price must be at least 0" },
                                valueAsNumber: true,
                            })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>
                </div>
                <div>
                    <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Description</label>
                    <textarea
                        {...register("description", { required: "Description is required" })}
                        className="w-full border rounded px-3 py-2 bg-white text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </div>

                <div>
                    <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Stock</label>
                    <input
                        type="number"
                        {...register("stock", {
                            required: "Stock is required",
                            min: { value: 0, message: "Stock must be at least 0" },
                            valueAsNumber: true,
                        })}
                        className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                    />
                    {errors.stock && <span className="text-red-500 text-sm">{errors.stock.message}</span>}
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating..." : "Create Product"}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;