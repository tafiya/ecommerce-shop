import { FC } from "react";

const Spinner:FC = () => {
    return (
        <div className=" flex items-center justify-center">
            <div
                className="w-20 h-20 animate-[spin_2s_linear_infinite] 
    rounded-full border-8 border-dotted border-sky-600"
            ></div>
        </div>
    );
};

export default Spinner;
