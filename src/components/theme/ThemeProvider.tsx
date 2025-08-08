"use client";
import { useSelector } from "react-redux";

import { ReactNode, useEffect } from "react";
import { RootState } from "@/redux/store";
import { ThemeMode } from "@/types/theme";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const mode = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
        document.body.classList.toggle("dark", mode === ThemeMode.DARK);
    }, [mode]);

    return <>{children}</>;
}
export default ThemeProvider;