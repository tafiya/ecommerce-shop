'use client';

import React, { FC } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FormValues } from '@/types';
import toast from 'react-hot-toast';
import { createProduct } from '@/lib/api';

const CreateProduct: FC = () => {
    const router = useRouter();

    const defaultValues: FormValues = {
        title: '',
        description: '',
        price: null,
        stock: null,
        brand: '',
        category: '',
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        defaultValues,
    });
    // preate product function
    const onSubmit = async (data: FormValues) => {
        try {
            await createProduct(data);
            toast.success("Product is created");
            reset();
            router.push("/");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data?.message || "Failed to create product.");
            } else if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Failed to create product", { position: "top-center" });
            }
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 rounded-[15px] text-gray-900 dark:text-gray-100 border border-[rgba(185,184,184,0.5)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] [-webkit-backdrop-filter:blur(5px)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
            <h2 className="text-2xl font-bold mb-6">Create Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                            Title
                        </label>
                        <input
                            type="text"
                            {...register('title', { required: 'Title is required' })}
                            className="w-full border rounded px-3 py-1.5 bg-white  text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                        />
                        {errors.title && (
                            <span className="text-red-500 text-sm">
                                {errors.title.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                            Brand
                        </label>
                        <input
                            type="text"
                            {...register('brand', { required: 'Brand is required' })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                        />
                        {errors.brand && (
                            <span className="text-red-500 text-sm">
                                {errors.brand.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                            Category
                        </label>
                        <input
                            type="text"
                            {...register('category', { required: 'Category is required' })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                        />
                        {errors.category && (
                            <span className="text-red-500 text-sm">
                                {errors.category.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                            Price
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            {...register('price', {
                                required: 'Price is required',
                                min: { value: 0, message: 'Price must be at least 0' },
                                valueAsNumber: true,
                            })}
                            className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                        />
                        {errors.price && (
                            <span className="text-red-500 text-sm">
                                {errors.price.message}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                        Description
                    </label>
                    <textarea
                        {...register('description', {
                            required: 'Description is required',
                        })}
                        className="w-full border rounded px-3 py-2 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                    />
                    {errors.description && (
                        <span className="text-red-500 text-sm">
                            {errors.description.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                        Stock
                    </label>
                    <input
                        type="number"
                        {...register('stock', {
                            required: 'Stock is required',
                            min: { value: 0, message: 'Stock must be at least 0' },
                            valueAsNumber: true,
                        })}
                        className="w-full border rounded px-3 py-1.5 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-zinc-500"
                    />
                    {errors.stock && (
                        <span className="text-red-500 text-sm">{errors.stock.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#5a3e52] text-white py-2 rounded hover:bg-[#87617c] transition dark:bg-[#ab7d9d] dark:hover:bg-[#87617c] "
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Creating...' : 'Create Product'}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
