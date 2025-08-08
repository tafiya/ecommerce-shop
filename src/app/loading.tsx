import Image from "next/image";
import load from "../assets/loading.gif";
import { FC } from "react";

const loading:FC = () => {
    return (
        <div className=" flex justify-center items-center border h-screen">
            <Image
                src={load}
                height={200}
                width={200}
                alt="loading"
                className="block mx-auto my-auto"
            ></Image>
        </div>
    );
};

export default loading;
