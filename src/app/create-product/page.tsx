import CreateProduct from '@/components/products/CreateProduct';
import React, { FC } from 'react';

const CreatePage:FC = () => {
    return (
        <div className=' md:p-0 p-4'>
            <CreateProduct></CreateProduct>
        </div>
    );
};

export default CreatePage;