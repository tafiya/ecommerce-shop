"use client";
import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";
import { RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/themeSlice";
import { Moon, Sun } from "lucide-react"
const ThemeToggle:FC =()=> {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
      <label className="inline-flex items-center cursor-pointer">
          <input
              type="checkbox"
              checked={mode === "dark"}
              onChange={() => dispatch(toggleTheme())}
              className="sr-only"
          />
          <div
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${mode === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
          >
              <div
                  className={`w-8 h-8 bg-white relative -left-1 top-0 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${mode === "dark" ? "translate-x-8" : "translate-x-0"
                      }`}
              >
                  {mode === "dark" ? (
                      <Sun size={18} className="text-yellow-700" />
                  ) : (
                      <Moon size={18} className="text-gray-700" />
                  )}
              </div>
          </div>
      </label>
  );
}
export default ThemeToggle;