"use client"
import {MdLightMode, MdDarkMode} from "react-icons/md";
import {useTheme} from "next-themes";

export default function DarkMode() {
const {theme, setTheme, systemTheme} = useTheme();
const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <>
        <div>
            {
                currentTheme === 'dark' ?
                    <MdLightMode className='text-xk cursor-pointer hover:text-amber-600' onClick={() => setTheme('light') } /> :
                    <MdDarkMode className='text-xk cursor-pointer hover:text-amber-600' onClick={() => setTheme('dark') }/>
            }
        </div>
        </>
    )
}