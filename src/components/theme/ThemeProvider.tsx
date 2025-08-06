"use client";
import { useSelector } from "react-redux";

import { ReactNode, useEffect } from "react";
import { RootState } from "@/redux/store";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const mode = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
        document.body.classList.toggle("dark", mode === "dark");
    }, [mode]);

    return <>{children}</>;
}
export default ThemeProvider;